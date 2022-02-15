import request from "supertest";
import {Test} from "@nestjs/testing";
import appSpec from "../../../app.json";
import {AppModule} from "../../../src/app.module";
import {renderObjectTemplate, renderTemplate} from "../../util/template";

function createOAuth2Auth() {
    return {
        access_token: ""
    };
}

function createAuth(spec) {
    if (spec.type === "oauth_2") {
        return createOAuth2Auth();
    }

    return {};
}

function createTrigger(spec, auth, nestApp) {
    function execute(input) {
        const { type, pollingConfig = {} } = spec;
        const { restConfig = {} } = pollingConfig;
        const { url, method, queryParams, headers, body } = restConfig;

        if (type !== "polling") {
            throw new Error('Execute accepts only polling config');
        }

        const ctx = {
            data: {
                authData: auth,
                inputData: input,
            },
        };

        const methodLower = method.toLowerCase();
        const renderedUrl = renderTemplate(url, ctx);
        let req = request(nestApp.getHttpServer())[methodLower](renderedUrl);

        if (queryParams) {
            req = req.query(renderObjectTemplate(queryParams, ctx));
        }

        if (headers) {
            req = req.set(renderObjectTemplate(headers, ctx));
        }

        if (body) {
            req = req.send(renderObjectTemplate(body, ctx));
        }

        return req;
    }

    return {
        key: spec.key,
        spec,
        execute,
    };
}

function createApp(spec, nestApp) {
    const auth = createAuth(spec.auth);
    const triggers = spec.triggers.map(it => createTrigger(it, auth, nestApp));

    function getTrigger(key: string) {
        return triggers.find(it => it.key === key);
    }

    return {
        spec,
        auth,
        triggers,
        getTrigger,
    };
}

async function createNestApp(rootModule) {
    const moduleRef = await Test.createTestingModule({
        imports: [rootModule]
    })
        .compile();

    const app = moduleRef.createNestApplication();
    await app.init();

    return app;
}

describe('CampaignFilterMatched', () => {
    let app;
    let nestApp;
    let trigger;

    beforeEach(async () => {
        nestApp = await createNestApp(AppModule);
        app = createApp(appSpec, nestApp);
        trigger = app.getTrigger('campaign_filter_matched');
    });

    it('#execute', async () => {
        const res = await trigger.execute({
            account_id: "1231231234",
            filter: {},
            analysis_period: "this_month"
        });

        expect(res.status).toEqual(200);
        expect(res.body).toEqual([
            {
                id: "1231230001"
            }
        ])
    });
});

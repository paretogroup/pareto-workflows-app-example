import {Test} from "@nestjs/testing";
import {createTestApp} from "@paretogroup/pw-testing";
import appSpec from "../../../app.json";
import {AppModule} from "../../../src/app.module";

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
        app = createTestApp(appSpec, nestApp.getHttpServer());
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

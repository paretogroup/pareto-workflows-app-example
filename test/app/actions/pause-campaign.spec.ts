import {createTestApp} from "@paretogroup/pw-testing";
import appSpec from "../../../app.json";
import {AppModule} from "../../../src/app.module";
import {createTestServer} from "../../util/server";

describe('PauseCampaign', () => {
    let app;
    let nestApp;
    let action;

    beforeEach(async () => {
        nestApp = await createTestServer(AppModule);
        app = createTestApp(appSpec, nestApp.getHttpServer());
        action = app.getAction('pause_campaign');
    });

    it('field#account_id', async () => {
        const res = await action.getInput("account_id").execute({});

        expect(res.status).toEqual(200);
        expect(res.body).toEqual([
            {
                id: "1231231234",
                name: "Account A"
            }
        ])
    });

    it('field#campaign_id', async () => {
        const res = await action.getInput("campaign_id").execute({
            account_id: "1231231234",
        });

        expect(res.status).toEqual(200);
        expect(res.body).toEqual([
            {
                id: "1231231234",
                name: "Campaign A",
                status: "enabled"
            }
        ])
    });

    it('action#execute', async () => {
        const res = await action.execute({
            account_id: "1231231234",
            campaign_id: "1",
        });

        expect(res.status).toEqual(200);
        expect(res.body).toEqual({
            id: "1",
            name: "Campaign A",
            status: "paused"
        });
    });
});

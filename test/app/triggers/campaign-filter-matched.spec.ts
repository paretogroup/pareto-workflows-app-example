import { createTestApp } from '@paretogroup/pw-testing';
import appSpec from '../../../app.json';
import { AppModule } from '../../../src/app.module';
import { createTestServer } from '../../util/server';

describe('CampaignFilterMatched', () => {
  let app;
  let nestApp;
  let trigger;

  beforeEach(async () => {
    nestApp = await createTestServer(AppModule);
    app = createTestApp(appSpec, nestApp.getHttpServer());
    trigger = app.getTrigger('campaign_filter_matched');
  });

  it('field#accounts', async () => {
    const res = await trigger.getInput('account_id').execute({});

    expect(res.status).toEqual(200);
    expect(res.body).toEqual([
      {
        id: '1231231234',
        name: 'Account A',
      },
    ]);
  });

  it('field#filter', async () => {
    const res = await trigger.getInput('filter').execute({
      account_id: '1231231234',
    });

    expect(res.status).toEqual(200);
    expect(res.body).toEqual([
      {
        id: 'impressions',
        label: 'Impressions',
      },
    ]);
  });

  it('field#analysis_period', async () => {
    const res = await trigger.getInput('analysis_period').execute({
      account_id: '1231231234',
    });

    expect(res.status).toEqual(200);
    expect(res.body).toEqual([
      {
        id: 'this_month',
        label: 'This month',
      },
    ]);
  });

  it('trigger#execute', async () => {
    const res = await trigger.execute({
      account_id: '1231231234',
      filter: {},
      analysis_period: 'this_month',
    });

    expect(res.status).toEqual(200);
    expect(res.body).toEqual([
      {
        id: '1231230001',
      },
    ]);
  });
});

import { Module } from '@nestjs/common';
import { PauseCampaignModule } from './actions/pause-campaign.module';
import { CampaignFilterMatchedModule } from './triggers/campaign-filter-matched.module';

@Module({
  imports: [
    // triggers
    CampaignFilterMatchedModule,

    // actions
    PauseCampaignModule,
  ],
})
export class RpaModule {}

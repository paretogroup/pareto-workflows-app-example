import { Module } from '@nestjs/common';
import { CampaignFilterMatchedController } from './campaign-filter-matched.controller';

@Module({
  controllers: [CampaignFilterMatchedController],
})
export class CampaignFilterMatchedModule {}

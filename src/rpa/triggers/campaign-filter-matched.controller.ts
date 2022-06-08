import { Body, Controller, Get, HttpCode, Post } from '@nestjs/common';
import { CampaignFilterMatchedCommand } from './campaign-filter-matched.command';

@Controller('rpa/triggers/campaign_filter_matched')
export class CampaignFilterMatchedController {
  @Get('expressions')
  async expressions() {
    return [
      {
        id: 'impressions',
        label: 'Impressions',
      },
    ];
  }

  @Post('execute')
  @HttpCode(200)
  async execute(@Body() command: CampaignFilterMatchedCommand) {
    return [
      {
        id: '1231230001',
      },
    ];
  }
}

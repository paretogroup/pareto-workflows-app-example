import {
  Body,
  Controller,
  HttpCode,
  NotFoundException,
  Post,
} from '@nestjs/common';
import { PauseCampaignCommand } from './pause-campaign.command';

@Controller('rpa/actions/pause_campaign')
export class PauseCampaignController {
  private readonly campaigns = [
    {
      id: '1',
      name: 'Campaign A',
      status: 'enabled',
    },
    {
      id: '2',
      name: 'Campaign B',
      status: 'enabled',
    },
  ];

  @Post('execute')
  @HttpCode(200)
  async execute(@Body() command: PauseCampaignCommand) {
    const campaign = this.campaigns.find(
      (it) => +it.id === +command.campaignId,
    );
    if (!campaign) {
      throw new NotFoundException();
    }

    const pausedCampaign = { ...campaign };
    pausedCampaign.status = 'paused';
    return pausedCampaign;
  }
}

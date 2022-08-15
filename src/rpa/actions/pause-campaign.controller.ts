import {
  Body,
  Controller,
  HttpCode,
  NotFoundException,
  Post,
} from '@nestjs/common';
import {
  ApiDefaultResponse,
  ApiForbiddenResponse,
  ApiNotFoundResponse,
  ApiUnauthorizedResponse,
} from '@nestjs/swagger';
import { CampaignResult } from '../../shared/campaign.result';
import { CampaignStatus } from '../../shared/campaign.types';
import { PauseCampaignCommand } from './pause-campaign.command';

@Controller('rpa/actions/pause_campaign')
export class PauseCampaignController {
  private readonly campaigns: CampaignResult[] = [
    {
      id: '1',
      name: 'Campaign A',
      status: CampaignStatus.ENABLED,
    },
    {
      id: '2',
      name: 'Campaign B',
      status: CampaignStatus.ENABLED,
    },
  ];

  @Post('execute')
  @HttpCode(200)
  @ApiDefaultResponse({ status: 200, type: CampaignResult })
  @ApiNotFoundResponse()
  @ApiForbiddenResponse()
  @ApiUnauthorizedResponse()
  async execute(
    @Body() command: PauseCampaignCommand,
  ): Promise<CampaignResult> {
    const campaign = this.campaigns.find(
      (it) => +it.id === +command.campaignId,
    );
    if (!campaign) {
      throw new NotFoundException();
    }

    const pausedCampaign = { ...campaign };
    pausedCampaign.status = CampaignStatus.PAUSED;
    return pausedCampaign;
  }
}

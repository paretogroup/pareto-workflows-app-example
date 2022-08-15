import { Controller, Get } from '@nestjs/common';
import {
  ApiDefaultResponse,
  ApiForbiddenResponse,
  ApiUnauthorizedResponse,
} from '@nestjs/swagger';
import { CampaignResult } from '../shared/campaign.result';
import { CampaignStatus } from '../shared/campaign.types';

@Controller('api/campaigns')
export class CampaignsController {
  @Get()
  @ApiDefaultResponse({ status: 200, type: [CampaignResult] })
  @ApiForbiddenResponse()
  @ApiUnauthorizedResponse()
  async list(): Promise<CampaignResult[]> {
    return [
      {
        id: '1231231234',
        name: 'Campaign A',
        status: CampaignStatus.ENABLED,
      },
    ];
  }
}

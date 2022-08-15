import { Body, Controller, Get, HttpCode, Post } from '@nestjs/common';
import {
  ApiDefaultResponse,
  ApiForbiddenResponse,
  ApiUnauthorizedResponse,
} from '@nestjs/swagger';
import { CampaignResult } from '../../shared/campaign.result';
import { CampaignStatus } from '../../shared/campaign.types';
import { ExpressionResult } from '../../shared/expression.result';
import { CampaignFilterMatchedCommand } from './campaign-filter-matched.command';

@Controller('rpa/triggers/campaign_filter_matched')
export class CampaignFilterMatchedController {
  @Get('expressions')
  @ApiDefaultResponse({ status: 200, type: [ExpressionResult] })
  @ApiForbiddenResponse()
  @ApiUnauthorizedResponse()
  async expressions(): Promise<ExpressionResult[]> {
    return [
      {
        id: 'impressions',
        label: 'Impressions',
      },
    ];
  }

  @Post('execute')
  @HttpCode(200)
  @ApiDefaultResponse({ status: 200, type: [CampaignResult] })
  @ApiForbiddenResponse()
  @ApiUnauthorizedResponse()
  async execute(
    @Body() _command: CampaignFilterMatchedCommand,
  ): Promise<CampaignResult[]> {
    return [
      {
        id: '1231230001',
        name: 'Campaign A',
        status: CampaignStatus.ENABLED,
      },
    ];
  }
}

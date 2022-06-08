import { IsString } from 'class-validator';

export class PauseCampaignCommand {
  @IsString()
  accountId: string;

  @IsString()
  campaignId: string;
}

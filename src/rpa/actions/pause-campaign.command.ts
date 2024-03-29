import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';

export class PauseCampaignCommand {
  @IsString()
  @ApiProperty()
  accountId: string;

  @IsString()
  @ApiProperty()
  campaignId: string;
}

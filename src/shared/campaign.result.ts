import { ApiProperty } from '@nestjs/swagger';
import { IsEnum, IsNumberString, IsString } from 'class-validator';
import { CampaignStatus } from './campaign.types';

export class CampaignResult {
  @IsNumberString()
  @ApiProperty()
  id: string;

  @IsString()
  @ApiProperty()
  name: string;

  @IsEnum(CampaignStatus)
  @ApiProperty()
  status: CampaignStatus;
}

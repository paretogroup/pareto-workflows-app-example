import { ApiProperty } from '@nestjs/swagger';
import { IsObject, IsString } from 'class-validator';

export class CampaignFilterMatchedCommand {
  @IsString()
  @ApiProperty()
  accountId: string;

  @IsObject()
  @ApiProperty()
  filter: unknown;

  @IsString()
  @ApiProperty()
  analysisPeriod: string;
}

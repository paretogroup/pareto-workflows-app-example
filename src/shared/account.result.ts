import { ApiProperty } from '@nestjs/swagger';
import { IsNumberString, IsString } from 'class-validator';

export class AccountResult {
  @IsNumberString()
  @ApiProperty()
  id: string;

  @IsString()
  @ApiProperty()
  name: string;
}

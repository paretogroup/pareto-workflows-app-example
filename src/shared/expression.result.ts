import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';

export class ExpressionResult {
  @IsString()
  @ApiProperty()
  id: string;

  @IsString()
  @ApiProperty()
  label: string;
}

import { Controller, Get } from '@nestjs/common';
import {
  ApiDefaultResponse,
  ApiForbiddenResponse,
  ApiUnauthorizedResponse,
} from '@nestjs/swagger';
import { AccountResult } from '../shared/account.result';

@Controller('api/accounts')
export class AccountsController {
  @Get()
  @ApiDefaultResponse({ status: 200, type: [AccountResult] })
  @ApiForbiddenResponse()
  @ApiUnauthorizedResponse()
  async list(): Promise<AccountResult[]> {
    return [
      {
        id: '1231231234',
        name: 'Account A',
      },
    ];
  }
}

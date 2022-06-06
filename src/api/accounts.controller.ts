import { Controller, Get } from '@nestjs/common';

@Controller('api/accounts')
export class AccountsController {
  @Get()
  async list() {
    return [
      {
        id: '1231231234',
        name: 'Account A',
      },
    ];
  }
}

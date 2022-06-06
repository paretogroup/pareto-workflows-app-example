import { AccountsController } from './accounts.controller';
import { Module } from '@nestjs/common';

@Module({
  controllers: [AccountsController],
})
export class AccountsModule {}

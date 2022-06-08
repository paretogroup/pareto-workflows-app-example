import { Module } from '@nestjs/common';
import { AccountsModule } from './accounts.module';
import { CampaignsModule } from './campaigns.module';

@Module({
  imports: [AccountsModule, CampaignsModule],
})
export class ApiModule {}

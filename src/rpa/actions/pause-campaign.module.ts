import {Module} from "@nestjs/common";
import {PauseCampaignController} from "./pause-campaign.controller";

@Module({
    controllers: [PauseCampaignController]
})
export class PauseCampaignModule {}

import {Body, Controller, Post} from "@nestjs/common";
import {PauseCampaignCommand} from "./pause-campaign.command";

@Controller("rpa/actions/pause_campaign")
export class PauseCampaignController {
    @Post("execute")
    async execute(@Body() command: PauseCampaignCommand) {
        // logic to pause a campaign
    }
}

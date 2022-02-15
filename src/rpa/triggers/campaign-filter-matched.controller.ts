import {Body, Controller, Get, HttpCode, Post} from "@nestjs/common";
import {CampaignFilterMatchedCommand} from "./campaign-filter-matched.command";

@Controller('rpa/triggers/campaign_filter_matched')
export class CampaignFilterMatchedController {
    @Get('expression')
    async expression() {
        // logic to get expression options
    }

    @Post('execute')
    @HttpCode(200)
    async execute(@Body() command: CampaignFilterMatchedCommand) {
        return [
            {
                id: "1231230001"
            }
        ]
    }
}

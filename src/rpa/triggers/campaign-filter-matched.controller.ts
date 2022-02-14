import {Controller, Get} from "@nestjs/common";

@Controller('rpa/triggers/campaign_filter_matched')
export class CampaignFilterMatchedController {
    @Get('expression')
    async expression() {
        // logic to get expression options
    }
}

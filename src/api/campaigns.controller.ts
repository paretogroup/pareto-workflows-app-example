import {Controller, Get} from "@nestjs/common";

@Controller("api/campaigns")
export class CampaignsController {
    @Get()
    async list() {
        return [
            {
                id: "1231231234",
                name: "Campaign A",
                status: "enabled"
            }
        ];
    }
}

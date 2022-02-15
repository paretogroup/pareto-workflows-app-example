import {IsObject, IsString} from "class-validator";

export class CampaignFilterMatchedCommand {
    @IsString()
    accountId: string;

    @IsObject()
    filter: unknown;

    @IsString()
    analysisPeriod: string;
}

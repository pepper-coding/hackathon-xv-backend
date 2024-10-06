import { Controller, HttpCode, Get } from "@nestjs/common";
import { ApiTags, ApiOkResponse } from "@nestjs/swagger";
import { QueryBus } from "@nestjs/cqrs";

import { ResponseStatusEnum } from "@common/enums/response-status.enum";
import { GetAppIndexQuery } from "@common/queries/get-app-index.query";

@ApiTags("App")
@Controller("/")
export class AppController {
    constructor(private readonly queryBus: QueryBus) {}

    @ApiOkResponse({ description: "Everything is good" })
    @HttpCode(ResponseStatusEnum.OK)
    @Get("/")
    public async getAppIndex() {
        return await this.queryBus.execute(new GetAppIndexQuery());
    }
}
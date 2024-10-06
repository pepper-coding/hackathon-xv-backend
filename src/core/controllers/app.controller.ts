import { Controller, Get } from "@nestjs/common";
import { ApiTags } from "@nestjs/swagger";
import { QueryBus } from "@nestjs/cqrs";

import { GetAppIndexQuery } from "@common/queries/get-app-index.query";

@ApiTags("App")
@Controller("/")
export class AppController {
    constructor(private readonly queryBus: QueryBus) {}

    @Get("/")
    public async getAppIndex() {
        return await this.queryBus.execute(new GetAppIndexQuery());
    }
}
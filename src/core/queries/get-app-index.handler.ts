import { QueryHandler } from "@nestjs/cqrs";

import { GetAppIndexQuery } from "@common/queries/get-app-index.query";
import { ResponseService } from "@core/services/response.service";

@QueryHandler(GetAppIndexQuery)
export class GetAppIndexHandler {
    constructor(private readonly responseService: ResponseService) {}

    public execute() {
        return this.responseService.getOkResponse({
            message: "Everything is good"
        });
    }
}
import { Injectable } from "@nestjs/common";

import { ClientResponseInterface } from "@common/interfaces/client-response.interface";
import { CreatedResponse } from "@common/responses/created.response";
import { OkResponse } from "@common/responses/ok.response";

@Injectable()
export class ResponseService {
    public getCreatedResponse<R extends ClientResponseInterface = ClientResponseInterface>(response: R) {
        return new CreatedResponse(response);
    }

    public getOkResponse<R extends ClientResponseInterface = ClientResponseInterface>(response: R) {
        return new OkResponse(response);
    }
}
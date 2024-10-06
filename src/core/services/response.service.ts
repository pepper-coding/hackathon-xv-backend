import { Injectable } from "@nestjs/common";

import { ClientResponseInterface } from "@common/interfaces/client-response.interface";
import { OkResponse } from "@common/responses/ok.response";

@Injectable()
export class ResponseService {
    public getOkResponse<R extends ClientResponseInterface = ClientResponseInterface>(response: R) {
        return new OkResponse(response);
    }
}
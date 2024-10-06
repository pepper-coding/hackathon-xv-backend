import { ClientResponseInterface } from "@common/interfaces/client-response.interface";
import { ClientResponseClass } from "@common/classes/client-response.class";
import { ResponseStatusEnum } from "@common/enums/response-status.enum";

export class OkResponse<R extends ClientResponseInterface = ClientResponseInterface> extends ClientResponseClass<R> {
    constructor(response: R) {
        super(response, ResponseStatusEnum.OK);
    }
}
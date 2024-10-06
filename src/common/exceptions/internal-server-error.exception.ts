import { ServerExceptionInterface } from "@common/interfaces/server-exception.interface";
import { ServerExceptionClass } from "@common/classes/server-exception.class";
import { ExceptionStatusEnum } from "@common/enums/exception-status.enum";

export class InternalServerErrorException<R extends ServerExceptionInterface = ServerExceptionInterface> extends ServerExceptionClass<R> {
    constructor(response: R) {
        super(response, ExceptionStatusEnum.INTERNAL_SERVER_ERROR);
    }
}
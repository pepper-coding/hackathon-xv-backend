import { ClientExceptionInterface } from "@common/interfaces/client-exception.interface";
import { ClientExceptionClass } from "@common/classes/client-exception.class";
import { ExceptionStatusEnum } from "@common/enums/exception-status.enum";

export class BadRequestException<R extends ClientExceptionInterface = ClientExceptionInterface> extends ClientExceptionClass<R> {
    constructor(response: R) {
        super(response, ExceptionStatusEnum.BAD_REQUEST);
    }
}
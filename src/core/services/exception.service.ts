import { Injectable } from "@nestjs/common";

import { InternalServerErrorException } from "@common/exceptions/internal-server-error.exception";
import { ServerExceptionInterface } from "@common/interfaces/server-exception.interface";
import { BadRequestException } from "@common/exceptions/bad-request.exception";

@Injectable()
export class ExceptionService {
    public getInternalServerErrorException<R extends ServerExceptionInterface = ServerExceptionInterface>(response: R) {
        return new InternalServerErrorException(response);
    }

    public getBadRequestException<R extends ServerExceptionInterface = ServerExceptionInterface>(response: R) {
        return new BadRequestException(response);
    }
}
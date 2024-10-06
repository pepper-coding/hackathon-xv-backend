import { Catch, ArgumentsHost, ExceptionFilter as NestExceptionFilter } from "@nestjs/common";

import { BaseExceptionClass } from "@common/classes/base-exception.class";

@Catch(BaseExceptionClass)
export class ExceptionFilter implements NestExceptionFilter {
    constructor() {}

    public catch(exception: BaseExceptionClass, host: ArgumentsHost) {
        const response = exception.getResponse();
        const status = exception.getStatus();
	
        return host.switchToHttp().getResponse().status(status).send(response);
    }
}
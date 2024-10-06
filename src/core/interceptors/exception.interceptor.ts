import { Injectable, NestInterceptor, ExecutionContext, CallHandler } from "@nestjs/common";

import * as rxjs from "rxjs";

import { InternalServerErrorException } from "@common/exceptions/internal-server-error.exception";
import { BaseExceptionClass } from "@common/classes/base-exception.class";

@Injectable()
export class ExceptionInterceptor implements NestInterceptor {
    public intercept(context: ExecutionContext, next: CallHandler) {
        const operator = rxjs.catchError((error) => {
            if(error instanceof BaseExceptionClass) {
                throw error;
            }
            else {
                throw new InternalServerErrorException({
                    message: "Unexpected error has occurred",
                    error: {
                        cause: error.cause,
                        message: error.message,
                        name: error.name,
                        stack: error.stack
                    }
                });
            }
        });

        const observable = next.handle();

        return observable.pipe(operator);
    }
}
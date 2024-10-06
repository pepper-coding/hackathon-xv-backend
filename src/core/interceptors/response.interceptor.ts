import { Injectable, NestInterceptor, ExecutionContext, CallHandler } from "@nestjs/common";

import * as rxjs from "rxjs";

import { BaseResponseClass } from "@common/classes/base-response.class";

@Injectable()
export class ResponseInterceptor implements NestInterceptor {
    public intercept(context: ExecutionContext, next: CallHandler) {
        const operator = rxjs.map((value: any) => {
            if(value instanceof BaseResponseClass) {
                return value.getResponse();
            }
            else {
                return value;
            }
        });

        const observable = next.handle();

        return observable.pipe(operator);
    }
}
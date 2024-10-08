import { Injectable, CanActivate, ExecutionContext } from "@nestjs/common";
import { Reflector } from "@nestjs/core";

import { FastifyRequest } from "fastify";
import { Schema } from "zod";

import { ExceptionService } from "@core/services/exception.service";

@Injectable()
export class ValidationGuard implements CanActivate {
    constructor(
        private readonly exceptionService: ExceptionService,
        private readonly reflector: Reflector
    ) {}

    public async canActivate(context: ExecutionContext) {
        const handler = context.getHandler();

        const schema = this.reflector.get<Schema>("schema", handler);

        const http = context.switchToHttp();

        const request = http.getRequest<FastifyRequest>();

        const result = await schema.safeParseAsync(request);

        if(result.success === false) {
            throw this.exceptionService.getBadRequestException({
                message: "Error occurred during validation",
                cause: result.error.issues
            });
        }
        else {
            return true;
        }
    }
}

import { APP_INTERCEPTOR, APP_FILTER } from "@nestjs/core";
import { Global, Module } from "@nestjs/common";

import { ExceptionInterceptor } from "@core/interceptors/exception.interceptor";
import { ResponseInterceptor } from "@core/interceptors/response.interceptor";
import { AuthController } from "@core/controllers/auth.controller";
import { AppController } from "@core/controllers/app.controller";
import { ExceptionModule } from "@core/modules/exception.module";
import { ExceptionFilter } from "@core/filters/exception.filter";
import { ResponseModule } from "@core/modules/response.module";
import { SwaggerModule } from "@core/modules/swagger.module";
import { ConfigModule } from "@core/modules/config.module";
import { PrismaModule } from "@core/modules/prisma.module";
import { CqrsModule } from "@core/modules/cqrs.module";

@Global()
@Module({
    imports: [
        ExceptionModule,
        ResponseModule,
        SwaggerModule,
        ConfigModule,
        PrismaModule,
        CqrsModule
    ],
    controllers: [
        AuthController,
        AppController
    ],
    providers: [
        {
            useClass: ResponseInterceptor,
            provide: APP_INTERCEPTOR
        },
        {
            useClass: ExceptionInterceptor,
            provide: APP_INTERCEPTOR
        },
        {
            useClass: ExceptionFilter,
            provide: APP_FILTER
        }
    ]
})
export class AppModule {}
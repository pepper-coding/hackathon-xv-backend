import { CqrsModule as NestCqrsModule } from "@nestjs/cqrs";
import { Global, Module } from "@nestjs/common";

import { PostAuthSignupHandler } from "@core/commands/post-auth-signup.handler";
import { GetAppIndexHandler } from "@core/queries/get-app-index.handler";

@Global()
@Module({
    imports: [
    	NestCqrsModule.forRoot()
    ],
    providers: [
        PostAuthSignupHandler,
        GetAppIndexHandler
    ]
})
export class CqrsModule {}
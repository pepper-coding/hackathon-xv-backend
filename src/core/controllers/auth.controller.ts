import { Controller, HttpCode, Post } from "@nestjs/common";
import { ApiTags, ApiCreatedResponse } from "@nestjs/swagger";
import { CommandBus } from "@nestjs/cqrs";

import { PostAuthSignupCommand } from "@common/commands/post-auth-signup.command";
import { ResponseStatusEnum } from "@common/enums/response-status.enum";

@ApiTags("Auth")
@Controller("/auth")
export class AuthController {
    constructor(private readonly commandBus: CommandBus) {}

    @ApiCreatedResponse({ description: "user has been successfully signed up" })
    @HttpCode(ResponseStatusEnum.CREATED)
    @Post("/signup")
    public async postAuthSignup() {
        return await this.commandBus.execute(new PostAuthSignupCommand());
    }
}
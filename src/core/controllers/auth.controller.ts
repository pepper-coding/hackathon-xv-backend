import { Controller, HttpCode, Post } from "@nestjs/common";
import { ApiTags, ApiCreatedResponse, ApiBody } from "@nestjs/swagger";
import { CommandBus } from "@nestjs/cqrs";

import { PostAuthSignupCommand } from "@common/commands/post-auth-signup.command";
import { PostAuthSignupBodyDto } from "@common/dtos/post-auth-signup.dto";
import { ResponseStatusEnum } from "@common/enums/response-status.enum";

@ApiTags("Auth")
@Controller("/auth")
export class AuthController {
    constructor(private readonly commandBus: CommandBus) {}

    @ApiCreatedResponse({ description: "User has been successfully signed up" })
    @ApiBody({ type: PostAuthSignupBodyDto, description: "Post auth signup body", required: true })
    @HttpCode(ResponseStatusEnum.CREATED)
    @Post("/signup")
    public async postAuthSignup() {
        return await this.commandBus.execute(new PostAuthSignupCommand());
    }
}
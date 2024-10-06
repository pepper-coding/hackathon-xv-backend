import { ApiTags, ApiCreatedResponse, ApiOkResponse, ApiBody } from "@nestjs/swagger";
import { Controller, HttpCode, Post, Body } from "@nestjs/common";
import { CommandBus } from "@nestjs/cqrs";

import { PostAuthSignupCommand } from "@common/commands/post-auth-signup.command";
import { PostAuthLoginCommand } from "@common/commands/post-auth-login.command";
import { PostAuthSignupBodyDto } from "@common/dtos/post-auth-signup.dto";
import { PostAuthLoginBodyDto } from "@common/dtos/post-auth-login.dto";
import { ResponseStatusEnum } from "@common/enums/response-status.enum";

@ApiTags("Auth")
@Controller("/auth")
export class AuthController {
    constructor(private readonly commandBus: CommandBus) {}

    @ApiCreatedResponse({ description: "User has been successfully signed up" })
    @ApiBody({ type: PostAuthSignupBodyDto, description: "Post auth signup body", required: true })
    @HttpCode(ResponseStatusEnum.CREATED)
    @Post("/signup")
    public async postAuthSignup(@Body() body: PostAuthSignupBodyDto) {
        return await this.commandBus.execute(new PostAuthSignupCommand(body));
    }

    @ApiOkResponse({ description: "User has been successfully logged in" })
    @ApiBody({ type: PostAuthLoginBodyDto, description: "Post auth login body", required: true })
    @HttpCode(ResponseStatusEnum.OK)
    @Post("/login")
    public async postAuthLogin(@Body() body: PostAuthLoginBodyDto) {
        return await this.commandBus.execute(new PostAuthLoginCommand(body));
    }
}
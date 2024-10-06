import { CommandHandler } from "@nestjs/cqrs";

import { PostAuthLoginCommand } from "@common/commands/post-auth-login.command";
import { ResponseService } from "@core/services/response.service";

@CommandHandler(PostAuthLoginCommand)
export class PostAuthLoginHandler {
    constructor(private readonly responseService: ResponseService) {}

    public execute(command: PostAuthLoginCommand) {
        return this.responseService.getOkResponse({
            message: "User has been successfully logged in"
        });
    }
}
import { CommandHandler } from "@nestjs/cqrs";

import { PostAuthSignupCommand } from "@common/commands/post-auth-signup.command";
import { ResponseService } from "@core/services/response.service";

@CommandHandler(PostAuthSignupCommand)
export class PostAuthSignupHandler {
    constructor(private readonly responseService: ResponseService) {}

    public execute() {
        return this.responseService.getCreatedResponse({
            message: "User has been successfully signed up"
        });
    }
}
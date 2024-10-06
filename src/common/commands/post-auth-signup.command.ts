import { PostAuthSignupBodyDto } from "@common/dtos/post-auth-signup.dto";

export class PostAuthSignupCommand {
    constructor(public readonly body: PostAuthSignupBodyDto) {}
}
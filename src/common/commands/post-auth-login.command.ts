import { PostAuthLoginBodyDto } from "@common/dtos/post-auth-login.dto";

export class PostAuthLoginCommand {
    constructor(public readonly body: PostAuthLoginBodyDto) {}
}
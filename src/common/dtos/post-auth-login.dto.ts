import { ApiProperty } from "@nestjs/swagger";

export class PostAuthLoginBodyDto {
    @ApiProperty({ name: "password", type: String, required: true, example: "12345678", description: "Post auth login body password" })
    public readonly password: string;

    @ApiProperty({ name: "login", type: String, required: true, example: "ilshaw", description: "Post auth login body login" })
    public readonly login: string;
}
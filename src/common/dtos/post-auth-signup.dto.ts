import { ApiProperty } from "@nestjs/swagger";

export class PostAuthSignupBodyDto {
    @ApiProperty({ name: "password", type: String, required: true, example: "12345678", description: "Post auth signup body password" })
    public readonly password: string;

    @ApiProperty({ name: "login", type: String, required: true, example: "ilshaw", description: "Post auth signup body login" })
    public readonly login: string;
}
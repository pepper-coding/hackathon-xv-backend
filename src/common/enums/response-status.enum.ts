import { HttpStatus } from "@nestjs/common";

export enum ResponseStatusEnum {
    CREATED = HttpStatus.CREATED,
    OK = HttpStatus.OK
}
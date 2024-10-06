import { HttpStatus } from "@nestjs/common";

export enum ExceptionStatusEnum {
    INTERNAL_SERVER_ERROR = HttpStatus.INTERNAL_SERVER_ERROR,
    BAD_REQUEST = HttpStatus.BAD_REQUEST
}
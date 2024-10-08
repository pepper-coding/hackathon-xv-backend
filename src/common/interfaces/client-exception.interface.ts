import { BaseExceptionInterface } from "@common/interfaces/base-exception.interface";

export interface ClientExceptionInterface extends BaseExceptionInterface {
    readonly cause?: ExceptionCauseType;
}
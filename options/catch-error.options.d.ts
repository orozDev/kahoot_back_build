import { ArgumentsHost, HttpException } from '@nestjs/common';
import { BaseExceptionFilter } from '@nestjs/core';
type ExceptionType = {
    detail: string;
    table: string;
};
export declare class QueryErrorFilter extends BaseExceptionFilter<HttpException | ExceptionType> {
    catch(exception: ExceptionType, host: ArgumentsHost): void;
}
export {};

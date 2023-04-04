import { ValidationError } from '@nestjs/common';
export declare const validationPipeOptions: {
    transform: boolean;
    exceptionFactory: (errors: ValidationError[]) => void;
};

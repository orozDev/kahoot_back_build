import { ValidationArguments, ValidatorConstraintInterface } from 'class-validator';
import { DataSource } from 'typeorm';
export declare class IsExistValidator implements ValidatorConstraintInterface {
    private dataSource;
    constructor(dataSource: DataSource);
    validate(value: string, validationArguments: ValidationArguments): Promise<boolean>;
}

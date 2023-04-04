import { DataSource } from 'typeorm';
export interface IUpdateUniqueValidatorConstrains {
    columnName: string;
    id: string | number;
    message: string;
    table: any;
    value: any;
}
export declare class UpdateUniqueValidator {
    private dataSource;
    constructor(dataSource: DataSource);
    validate(constraints: IUpdateUniqueValidatorConstrains[]): Promise<boolean>;
}

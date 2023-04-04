import { ConfigService } from '@nestjs/config';
export declare class UtilsService {
    private readonly config;
    constructor(config: ConfigService);
    includesUrl<Type>(data: Type[], fields: string[]): Type[];
    includeUrl<Type>(data: Type, fields: string[]): Type;
}

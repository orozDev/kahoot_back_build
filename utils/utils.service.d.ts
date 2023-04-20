import { ConfigService } from '@nestjs/config';
import { SelectQueryBuilder } from 'typeorm/query-builder/SelectQueryBuilder';
import { IComplexRequest } from './interfaces/complex-request.interface';
import { IComplexRequestOptions } from './interfaces/complex-request-options.interface';
import { Repository } from 'typeorm';
import { FindOneOptions } from 'typeorm/find-options/FindOneOptions';
export declare class UtilsService {
    private config;
    constructor(config: ConfigService);
    includesUrl<Type>(data: Type[], fields: string[]): Type[];
    includeUrl<Type>(data: Type, fields: string[]): Type;
    paginate<Type>(queryBuilder: SelectQueryBuilder<Type[]>, limit?: number, offset?: number): SelectQueryBuilder<Type[]>;
    search<Type>(queryBuilder: SelectQueryBuilder<Type[]>, fields: string[], value: string): SelectQueryBuilder<Type[]>;
    complexRequest<Type>(options: IComplexRequestOptions<Type>): Promise<IComplexRequest<Type[]>>;
    getObjectOr404<Type>(repository: Repository<Type>, options: FindOneOptions<Type>): Promise<Type>;
}

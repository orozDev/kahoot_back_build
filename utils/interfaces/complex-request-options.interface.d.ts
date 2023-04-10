import { Repository } from 'typeorm';
export interface IComplexRequestOptions<Type> {
    entity: string;
    repository: Repository<Type>;
    limit?: number;
    offset?: number;
    search?: string;
    searchFields?: string[];
    filterQuery?: object;
    orderBy?: string;
    order?: 'DESC' | 'ASC';
    includeStaticPrefix?: string[];
}

import { PaginationQueryDto } from '../utils/dto/paginationQueryDto';
export declare class PostQueryDto extends PaginationQueryDto {
    author: number;
    search: string;
}

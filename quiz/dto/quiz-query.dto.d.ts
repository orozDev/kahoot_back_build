import { PaginationQueryDto } from '../../utils/dto/paginationQueryDto';
export declare class QuizQueryDto extends PaginationQueryDto {
    search: string;
    category: number;
    klass: number;
    user: number;
    isORT: boolean;
    isPublished: boolean;
}

import { PaginationQueryDto } from '../../../utils/dto/paginationQueryDto';
export declare class QuizQueryDto extends PaginationQueryDto {
    search: string;
    subject: number;
    klass: number;
    user: number;
    isORT: boolean;
    isPublished: boolean;
}

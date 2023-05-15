import { PaginationQueryDto } from '../../../utils/dto/paginationQueryDto';
export declare class QuestionQueryDto extends PaginationQueryDto {
    quiz: number;
    orderBy: string;
    order: 'DESC' | 'ASC';
    search: string;
}

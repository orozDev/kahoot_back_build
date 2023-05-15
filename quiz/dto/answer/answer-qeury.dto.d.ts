import { PaginationQueryDto } from '../../../utils/dto/paginationQueryDto';
export declare class AnswerQueryDto extends PaginationQueryDto {
    search: string;
    question: number;
    isCorrect: boolean;
}

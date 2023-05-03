import { PaginationQueryDto } from '../../../utils/dto/paginationQueryDto';
export declare class SelectedQueryDto extends PaginationQueryDto {
    participant: number;
    question: number;
    answer: number;
    search: string;
}

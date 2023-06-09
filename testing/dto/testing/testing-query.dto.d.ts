import { PaginationQueryDto } from '../../../utils/dto/paginationQueryDto';
import { TestingStatusEnum } from '../../enum/testing-status.enum';
export declare class TestingQueryDto extends PaginationQueryDto {
    search: string;
    quiz: number;
    owner: number;
    status: TestingStatusEnum;
    participant: number;
}

import { TestingStatusEnum } from '../../enum/testing-status.enum';
export declare class CreateTestingDto {
    quiz: number;
    status: TestingStatusEnum;
    owner: number;
}

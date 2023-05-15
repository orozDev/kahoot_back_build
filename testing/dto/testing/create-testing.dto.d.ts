import { TestingStatusEnum } from '../../enum/testing-status.enum';
export declare class CreateTestingDto {
    quiz: number;
    code: string;
    status: TestingStatusEnum;
    owner: number;
}

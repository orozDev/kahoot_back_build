import { TestingStatusEnum } from '../../testing-status.enum';
export declare class UpdateTestingDto {
    quiz: number;
    code: string;
    status: TestingStatusEnum;
    owner: number;
}

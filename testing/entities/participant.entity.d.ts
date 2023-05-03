import { BaseEntity } from '../../options/base-entity.options';
import { UserEntity } from '../../user/entities/user.entity';
import { TestingEntity } from './testing.entity';
import { SelectedAnswerEntity } from './selected-answer.entity';
export declare class ParticipantEntity extends BaseEntity {
    user: UserEntity;
    name: string;
    testing: TestingEntity;
    testingId: number;
    selectedAnswers: SelectedAnswerEntity[];
    totalPoint: number;
    makeTotalPoint(): void;
}

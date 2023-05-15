import { BaseEntity } from '../../options/base-entity.options';
import { QuizEntity } from '../../quiz/entities/quiz.entity';
import { ParticipantEntity } from './participant.entity';
import { UserEntity } from '../../user/entities/user.entity';
import { TestingStatusEnum } from '../enum/testing-status.enum';
export declare class TestingEntity extends BaseEntity {
    quiz: QuizEntity;
    quizId: number;
    participants: ParticipantEntity[];
    code: string;
    status: TestingStatusEnum;
    owner: UserEntity;
}

import { BaseEntity } from '../../options/base-entity.options';
import { ParticipantEntity } from './participant.entity';
import { AnswerEntity } from '../../quiz/entities/answer.entity';
import { QuestionEntity } from '../../quiz/entities/question.entity';
export declare class SelectedAnswerEntity extends BaseEntity {
    participant: ParticipantEntity;
    question: QuestionEntity;
    answer: AnswerEntity;
    questionId: number;
    participantId: ParticipantEntity;
    point: number;
}

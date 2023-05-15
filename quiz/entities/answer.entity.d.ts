import { BaseEntity } from '../../options/base-entity.options';
import { QuestionEntity } from './question.entity';
export declare class AnswerEntity extends BaseEntity {
    question: QuestionEntity;
    value: string;
    image: string;
    isCorrect: boolean;
}

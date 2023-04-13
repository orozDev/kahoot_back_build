import { QuizEntity } from './quiz.entity';
import { AnswerEntity } from './answer.entity';
import { BaseEntity } from '../../options/base-entity.options';
export declare class QuestionEntity extends BaseEntity {
    title: string;
    content: string;
    image: string;
    quiz: QuizEntity;
    answers: AnswerEntity[];
}

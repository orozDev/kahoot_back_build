import { BaseEntity } from '../../options/base-entity.options';
import { QuizEntity } from './quiz.entity';
import { AnswerEntity } from './answer.entity';
export declare class QuestionEntity extends BaseEntity {
    title: string;
    content: string;
    image: string;
    time: number;
    quiz: QuizEntity;
    quizId: number;
    answers: AnswerEntity[];
    order: number;
}

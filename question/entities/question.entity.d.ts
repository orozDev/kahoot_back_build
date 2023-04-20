import { BaseEntity } from '../../options/base-entity.options';
import { QuizEntity } from '../../quiz/entities/quiz.entity';
import { AnswerEntity } from '../../answer/entities/answer.entity';
export declare class QuestionEntity extends BaseEntity {
    title: string;
    content: string;
    image: string;
    quiz: QuizEntity;
    quizId: number;
    answers: AnswerEntity[];
    order: number;
}

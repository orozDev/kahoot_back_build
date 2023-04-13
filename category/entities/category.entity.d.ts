import { BaseEntity } from '../../options/base-entity.options';
import { QuizEntity } from '../../quiz/entities/quiz.entity';
export declare class CategoryEntity extends BaseEntity {
    title: string;
    quizzers: QuizEntity[];
}

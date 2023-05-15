import { BaseEntity } from '../../options/base-entity.options';
import { QuizEntity } from '../../quiz/entities/quiz.entity';
import { SchoolEntity } from '../../school/entities/school.entity';
export declare class KlassEntity extends BaseEntity {
    title: string;
    school: SchoolEntity;
    quizzers: QuizEntity[];
}

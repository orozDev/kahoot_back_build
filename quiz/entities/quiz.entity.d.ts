import { BaseEntity } from '../../options/base-entity.options';
import { SubjectEntity } from '../../subject/entities/subject.entity';
import { KlassEntity } from '../../klass/entities/klass.entity';
import { QuestionEntity } from './question.entity';
import { UserEntity } from '../../user/entities/user.entity';
export declare class QuizEntity extends BaseEntity {
    title: string;
    description: string;
    image: string;
    subjects: SubjectEntity[];
    klasses: KlassEntity[];
    questions: QuestionEntity[];
    questionIds: number[];
    user: UserEntity;
    isORT: boolean;
    isPublished: boolean;
}

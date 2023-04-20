import { BaseEntity } from '../../options/base-entity.options';
import { CategoryEntity } from '../../category/entities/category.entity';
import { KlassEntity } from '../../klass/entities/klass.entity';
import { QuestionEntity } from '../../question/entities/question.entity';
import { UserEntity } from '../../user/entities/user.entity';
export declare class QuizEntity extends BaseEntity {
    title: string;
    description: string;
    image: string;
    categories: CategoryEntity[];
    klasses: KlassEntity[];
    questions: QuestionEntity[];
    time: number;
    questionIds: number[];
    user: UserEntity;
    isORT: boolean;
    isPublished: boolean;
}

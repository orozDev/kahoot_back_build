import { UserEntity } from './user.entity';
import { SchoolEntity } from '../../school/entities/school.entity';
import { BaseEntity } from '../../options/base-entity.options';
export declare class TeacherEntity extends BaseEntity {
    user: UserEntity;
    school: SchoolEntity;
}

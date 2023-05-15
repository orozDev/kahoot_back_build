import { BaseEntity } from '../../options/base-entity.options';
import { UserEntity } from './user.entity';
import { KlassEntity } from '../../klass/entities/klass.entity';
export declare class StudentEntity extends BaseEntity {
    user: UserEntity;
    klass: KlassEntity;
}

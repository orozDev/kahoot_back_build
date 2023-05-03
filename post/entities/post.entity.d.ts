import { BaseEntity } from '../../options/base-entity.options';
import { UserEntity } from '../../user/entities/user.entity';
export declare class PostEntity extends BaseEntity {
    title: string;
    description: string;
    image: string;
    content: string;
    author: UserEntity;
}

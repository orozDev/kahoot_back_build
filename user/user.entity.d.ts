import { UserRolesEnum } from './user-roles.enum';
import { BaseEntity } from '../options/base-entity.options';
export declare class UserEntity extends BaseEntity {
    avatar: string;
    username: string;
    password: string;
    phone: string;
    email: string;
    firstName: string;
    lastName: string;
    isActive: boolean;
    role: UserRolesEnum;
}

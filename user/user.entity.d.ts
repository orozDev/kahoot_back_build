import { UserRolesEnum } from './user-roles.enum';
export declare class User {
    id: number;
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

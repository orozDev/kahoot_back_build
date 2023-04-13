import { UserRolesEnum } from '../user-roles.enum';
export declare class UpdateUserDto {
    username: string;
    password: string;
    phone: string;
    email: string;
    firstName: string;
    lastName: string;
    isActive: boolean;
    role: UserRolesEnum;
}

import { UserRolesEnum } from '../../enum/user-roles.enum';
export declare class CreateUserDto {
    username: string;
    password: string;
    phone: string;
    email: string;
    firstName: string;
    lastName: string;
    isActive: boolean;
    role: UserRolesEnum;
}

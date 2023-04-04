import { UserRolesEnum } from '../user-roles.enum';
export declare class CreateUserDto {
    readonly username: string;
    readonly password: string;
    readonly phone: string;
    readonly email: string;
    readonly firstName: string;
    readonly lastName: string;
    readonly isActive: boolean;
    readonly role: UserRolesEnum;
}

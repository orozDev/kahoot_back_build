import { UserRolesEnum } from '../user-roles.enum';
export declare class UserQueryDto {
    limit: number;
    offset: number;
    role: UserRolesEnum;
    isActive: boolean;
    search: string;
}

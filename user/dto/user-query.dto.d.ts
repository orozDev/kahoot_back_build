import { UserRolesEnum } from '../user-roles.enum';
import { PaginationQueryDto } from '../../utils/dto/paginationQueryDto';
export declare class UserQueryDto extends PaginationQueryDto {
    role: UserRolesEnum;
    isActive: boolean;
    search: string;
}

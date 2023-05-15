import { UserRolesEnum } from '../../enum/user-roles.enum';
import { PaginationQueryDto } from '../../../utils/dto/paginationQueryDto';
export declare class UserQueryDto extends PaginationQueryDto {
    role: UserRolesEnum;
    isActive: boolean;
    search: string;
}

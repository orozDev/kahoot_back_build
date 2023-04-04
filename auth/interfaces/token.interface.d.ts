import { UserRolesEnum } from '../../user/user-roles.enum';
interface IAccessTokenPayload {
    username: string;
    sub: number | string;
    role: UserRolesEnum;
}
interface IFullToken {
    access_token: string;
    refresh_token: string;
}
export { IAccessTokenPayload, IFullToken };

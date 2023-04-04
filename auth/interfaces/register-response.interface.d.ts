export interface LoginResponseInterface {
    readonly id: number | string;
    readonly username: string;
    readonly password: string;
    readonly firstName: string;
    readonly lastName: string;
    readonly access_token: string;
    readonly refresh_token: string;
}

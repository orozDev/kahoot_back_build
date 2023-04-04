/// <reference types="multer" />
import { AuthService } from './auth.service';
import { LoginDto } from './dto/login.dto';
import { ChangePasswordDto } from './dto/change-password.dto';
import { ChangeProfileDto } from './dto/change-profile.dto';
import { RegisterDto } from './dto/register.dto';
import { User } from '../user/user.entity';
import { RefreshTokenDto } from './dto/refresh-token.dto';
import { LoginResponseInterface } from './interfaces/register-response.interface';
import { IFullToken } from './interfaces/token.interface';
export declare class AuthController {
    private readonly authService;
    constructor(authService: AuthService);
    login(loginDto: LoginDto, request: any): LoginResponseInterface;
    profile(request: any): Promise<User>;
    getNewTokens(refreshTokenDto: RefreshTokenDto, request: any): Promise<IFullToken>;
    changeProfile(request: any, dto: ChangeProfileDto, avatar?: Express.Multer.File): Promise<LoginResponseInterface>;
    register(dto: RegisterDto, avatar?: Express.Multer.File): Promise<LoginResponseInterface>;
    changePassword(request: any, res: any, dto: ChangePasswordDto): Promise<{
        isChanged: boolean;
        message: string;
    }>;
}

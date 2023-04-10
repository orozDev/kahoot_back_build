/// <reference types="multer" />
import { JwtService } from '@nestjs/jwt';
import { LoginResponseInterface } from './interfaces/register-response.interface';
import { ChangePasswordDto } from './dto/change-password.dto';
import { ChangePasswordInterface } from './interfaces/change-password.interface';
import { Repository } from 'typeorm';
import { ChangeProfileDto } from './dto/change-profile.dto';
import { RegisterDto } from './dto/register.dto';
import { UserEntity } from '../user/user.entity';
import { UserService } from '../user/user.service';
import { IAccessTokenPayload, IFullToken } from './interfaces/token.interface';
import { ConfigService } from '@nestjs/config';
import { FilesService } from '../files/files.service';
import { UtilsService } from '../utils/utils.service';
export declare class AuthService {
    private readonly userService;
    private readonly jwtService;
    private readonly config;
    private readonly filesService;
    private readonly utitls;
    private readonly userRepository;
    constructor(userService: UserService, jwtService: JwtService, config: ConfigService, filesService: FilesService, utitls: UtilsService, userRepository: Repository<UserEntity>);
    validateUser(username: string, password: string): Promise<any>;
    login(user: UserEntity): LoginResponseInterface;
    getNewTokens(user: UserEntity, refreshToken: string): Promise<IFullToken>;
    makeToken(payload: IAccessTokenPayload): IFullToken;
    profile(id: number): Promise<UserEntity>;
    register(dto: RegisterDto, avatar: Express.Multer.File): Promise<LoginResponseInterface>;
    changePassword(id: number, dto: ChangePasswordDto): Promise<ChangePasswordInterface>;
    changeProfile(id: number, dto: ChangeProfileDto, avatar?: Express.Multer.File): Promise<LoginResponseInterface>;
}

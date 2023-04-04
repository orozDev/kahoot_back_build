/// <reference types="multer" />
import { Repository } from 'typeorm';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './user.entity';
import { FilesService } from '../files/files.service';
import { UserQueryDto } from './dto/user-query.dto';
import { UtilsService } from 'src/utils/utils.service';
export declare class UserService {
    private readonly userRepository;
    private readonly filesService;
    private readonly utils;
    constructor(userRepository: Repository<User>, filesService: FilesService, utils: UtilsService);
    getAll(queryDto: UserQueryDto): Promise<{
        totalCount: number;
        offset: number;
        limit: number;
        totalPages: number;
        data: User[];
    }>;
    create(dto: CreateUserDto, avatar?: Express.Multer.File): Promise<User>;
    makePassword(password: string): Promise<string>;
    getOne(id: number): Promise<User>;
    delete(id: number): Promise<void>;
    update(id: number, dto: UpdateUserDto): Promise<User>;
    getByUsernameWithPassword(username: string): Promise<User>;
}

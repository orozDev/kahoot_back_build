/// <reference types="multer" />
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { UserEntity } from './user.entity';
import { FilesService } from '../files/files.service';
import { UserQueryDto } from './dto/user-query.dto';
import { UtilsService } from 'src/utils/utils.service';
import { IComplexRequest } from '../utils/interfaces/complex-request.interface';
import { Repository } from 'typeorm';
export declare class UserService {
    private readonly userRepository;
    private readonly filesService;
    private readonly utils;
    constructor(userRepository: Repository<UserEntity>, filesService: FilesService, utils: UtilsService);
    getAll(queryDto: UserQueryDto, orderBy?: string, order?: 'DESC' | 'ASC'): Promise<IComplexRequest<UserEntity[]>>;
    create(dto: CreateUserDto, avatar?: Express.Multer.File): Promise<UserEntity>;
    makePassword(password: string): Promise<string>;
    getOne(id: number): Promise<UserEntity>;
    delete(id: number): Promise<void>;
    update(id: number, dto: UpdateUserDto, avatar?: Express.Multer.File): Promise<UserEntity>;
    getByUsernameWithPassword(username: string): Promise<UserEntity>;
}

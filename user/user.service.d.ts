/// <reference types="multer" />
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { UserEntity } from './entities/user.entity';
import { FileService } from '../files/file.service';
import { UserQueryDto } from './dto/user-query.dto';
import { UtilsService } from 'src/utils/utils.service';
import { IComplexRequest } from '../utils/interfaces/complex-request.interface';
import { Repository } from 'typeorm';
export declare class UserService {
    private userRepository;
    private filesService;
    private utils;
    constructor(userRepository: Repository<UserEntity>, filesService: FileService, utils: UtilsService);
    findAll(queryDto: UserQueryDto, orderBy?: string, order?: 'DESC' | 'ASC'): Promise<IComplexRequest<UserEntity[]>>;
    create(dto: CreateUserDto, avatar?: Express.Multer.File): Promise<UserEntity>;
    makePassword(password: string): Promise<string>;
    findOne(id: number): Promise<UserEntity>;
    remove(id: number): Promise<void>;
    update(id: number, dto: UpdateUserDto, avatar?: Express.Multer.File): Promise<UserEntity>;
    findOneWithPassword(id: number): Promise<UserEntity>;
    getByUsernameWithPassword(username: string): Promise<UserEntity>;
}

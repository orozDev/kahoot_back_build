/// <reference types="multer" />
import { UserService } from './user.service';
import { UserEntity } from './entities/user.entity';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { ConfigService } from '@nestjs/config';
import { UserQueryDto } from './dto/user-query.dto';
import { IComplexRequest } from '../utils/interfaces/complex-request.interface';
export declare class UserController {
    private userService;
    private config;
    constructor(userService: UserService, config: ConfigService);
    findAll(queryDto: UserQueryDto): Promise<IComplexRequest<UserEntity[]>>;
    create(dto: CreateUserDto, avatar?: Express.Multer.File): Promise<UserEntity>;
    findOne(id: number): Promise<UserEntity>;
    update(id: number, dto: UpdateUserDto, avatar?: Express.Multer.File): Promise<UserEntity>;
    remove(id: number): Promise<void>;
}

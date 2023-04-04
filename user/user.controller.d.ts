/// <reference types="multer" />
import { UserService } from './user.service';
import { User } from './user.entity';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { ConfigService } from '@nestjs/config';
import { UserQueryDto } from './dto/user-query.dto';
export declare class UserController {
    private readonly userService;
    private readonly config;
    constructor(userService: UserService, config: ConfigService);
    getAll(queryDto: UserQueryDto): Promise<object>;
    create(dto: CreateUserDto, avatar?: Express.Multer.File): Promise<User>;
    getOne(id: number): Promise<User>;
    update(id: number, dto: UpdateUserDto): Promise<User>;
    delete(id: number): Promise<void>;
}

"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const bcryptjs = require("bcryptjs");
const user_entity_1 = require("./entities/user.entity");
const file_service_1 = require("../files/file.service");
const utils_service_1 = require("../utils/utils.service");
const typeorm_2 = require("typeorm");
let UserService = class UserService {
    constructor(userRepository, filesService, utils) {
        this.userRepository = userRepository;
        this.filesService = filesService;
        this.utils = utils;
    }
    async findAll(queryDto, orderBy = 'id', order = 'DESC') {
        const { limit, offset, search } = queryDto, rest = __rest(queryDto, ["limit", "offset", "search"]);
        return await this.utils.complexRequest({
            entity: 'user',
            repository: this.userRepository,
            limit,
            offset,
            filterQuery: rest,
            search,
            orderBy,
            order,
            searchFields: ['first_name', 'last_name', 'email', 'phone'],
        });
    }
    async create(dto, avatar = null) {
        let avatarPath = null;
        if (avatar) {
            avatarPath = this.filesService.createFile('user_avatars', avatar);
        }
        const hashPassword = await this.makePassword(dto.password);
        const user = await this.userRepository.create(Object.assign(Object.assign({}, dto), { avatar: avatarPath, password: hashPassword }));
        await this.userRepository.save(user);
        return user;
    }
    async makePassword(password) {
        return await bcryptjs.hash(password, 10);
    }
    async findOne(id) {
        const user = await this.userRepository.findOne({ where: { id } });
        if (!user)
            throw new common_1.NotFoundException({ message: 'User not found' });
        return user;
    }
    async remove(id) {
        const user = await this.findOne(id);
        await user.remove();
    }
    async update(id, dto, avatar = null) {
        const user = await this.userRepository.findOne({ where: { id } });
        if (!user)
            throw new common_1.NotFoundException({ message: 'User not found' });
        const temp = {};
        if (avatar) {
            if (user.avatar)
                this.filesService.removeFile(user.avatar);
            temp['avatar'] = this.filesService.createFile('user_avatars', avatar);
        }
        if (dto.password) {
            temp['password'] = await this.makePassword(dto.password);
        }
        await this.userRepository.update({ id }, Object.assign(Object.assign({}, dto), temp));
        return await this.findOne(id);
    }
    async findOneWithPassword(id) {
        const user = await this.userRepository.findOne({
            where: { id },
            select: [
                'username',
                'password',
                'id',
                'role',
                'avatar',
                'phone',
                'email',
                'firstName',
                'lastName',
            ],
        });
        if (!user)
            throw new common_1.NotFoundException({ message: 'User not found' });
        return user;
    }
    async getByUsernameWithPassword(username) {
        const user = await this.userRepository.findOne({
            where: { username },
            select: [
                'username',
                'password',
                'id',
                'role',
                'avatar',
                'phone',
                'email',
                'firstName',
                'lastName',
            ],
        });
        if (!user)
            throw new common_1.NotFoundException({
                message: ['Не существует пользователя или неверный пароль'],
            });
        return user;
    }
};
UserService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(user_entity_1.UserEntity)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        file_service_1.FileService,
        utils_service_1.UtilsService])
], UserService);
exports.UserService = UserService;
//# sourceMappingURL=user.service.js.map
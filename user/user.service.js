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
const typeorm_2 = require("typeorm");
const bcryptjs = require("bcryptjs");
const user_entity_1 = require("./user.entity");
const files_service_1 = require("../files/files.service");
const utils_service_1 = require("../utils/utils.service");
let UserService = class UserService {
    constructor(userRepository, filesService, utils) {
        this.userRepository = userRepository;
        this.filesService = filesService;
        this.utils = utils;
    }
    async getAll(queryDto) {
        const { limit, offset, search } = queryDto, rest = __rest(queryDto, ["limit", "offset", "search"]);
        let queryBuilder = await this.userRepository.createQueryBuilder('user');
        if (!!search) {
            queryBuilder = await queryBuilder
                .orWhere({ firstName: (0, typeorm_2.Like)(search) })
                .orWhere({ lastName: (0, typeorm_2.Like)(search) })
                .orWhere({ email: (0, typeorm_2.Like)(search) })
                .orWhere({ phone: (0, typeorm_2.Like)(search) });
        }
        const totalCount = await queryBuilder.where(rest).getCount();
        const take = limit || 10;
        const page = offset || 1;
        const skip = (page - 1) * take;
        const users = await queryBuilder.skip(skip).take(take).getMany();
        return {
            totalCount,
            offset,
            limit: limit,
            totalPages: Math.ceil(totalCount / limit),
            data: this.utils.includesUrl(users, ['avatar']),
        };
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
    async getOne(id) {
        const user = await this.userRepository.findOne({ where: { id } });
        if (!user)
            throw new common_1.NotFoundException({ message: 'User not found' });
        return this.utils.includeUrl(user, ['avatar']);
    }
    async delete(id) {
        await this.userRepository.delete(id);
    }
    async update(id, dto) {
        if (!!(dto === null || dto === void 0 ? void 0 : dto.password)) {
            const password = await this.makePassword(dto.password);
            await this.userRepository.update({ id }, Object.assign(Object.assign({}, dto), { password }));
        }
        else {
            await this.userRepository.update({ id }, dto);
        }
        return await this.getOne(id);
    }
    async getByUsernameWithPassword(username) {
        let user = null;
        user = await this.userRepository.findOne({
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
        console.log(user);
        if (!user)
            throw new common_1.NotFoundException({ message: 'User not found' });
        return this.utils.includeUrl(user, ['avatar']);
    }
};
UserService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(user_entity_1.User)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        files_service_1.FilesService,
        utils_service_1.UtilsService])
], UserService);
exports.UserService = UserService;
//# sourceMappingURL=user.service.js.map
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
exports.AuthService = void 0;
const common_1 = require("@nestjs/common");
const bcryptjs = require("bcryptjs");
const jwt_1 = require("@nestjs/jwt");
const typeorm_1 = require("typeorm");
const typeorm_2 = require("@nestjs/typeorm");
const user_entity_1 = require("../user/entities/user.entity");
const user_service_1 = require("../user/services/user.service");
const user_roles_enum_1 = require("../user/enum/user-roles.enum");
const config_1 = require("@nestjs/config");
const file_service_1 = require("../files/file.service");
const utils_service_1 = require("../utils/utils.service");
let AuthService = class AuthService {
    constructor(userService, jwtService, config, filesService, utitls, userRepository) {
        this.userService = userService;
        this.jwtService = jwtService;
        this.config = config;
        this.filesService = filesService;
        this.utitls = utitls;
        this.userRepository = userRepository;
    }
    async validateUser(username, password) {
        const user = await this.userService.getByUsernameWithPassword(username);
        if (!user)
            return null;
        const passwordEquals = await bcryptjs.compare(password, user.password);
        if (user && passwordEquals) {
            const { password } = user, result = __rest(user, ["password"]);
            return result;
        }
        return null;
    }
    login(user) {
        const payload = {
            username: user.username,
            sub: user.id,
            role: user.role,
        };
        const tokens = this.makeToken(payload);
        return Object.assign(Object.assign({}, user), tokens);
    }
    async getNewTokens(user, refreshToken) {
        try {
            await this.jwtService.verifyAsync(refreshToken, {
                secret: this.config.get('REFRESH_SECRET_KEY'),
            });
        }
        catch (err) {
            throw new common_1.UnauthorizedException({
                message: 'Expired refresh or invalid token',
            });
        }
        const result = await this.jwtService.verifyAsync(refreshToken, {
            secret: this.config.get('REFRESH_SECRET_KEY'),
        });
        if (!result) {
            throw new common_1.UnauthorizedException({ message: 'Invalid refresh token' });
        }
        const payload = {
            username: user.username,
            sub: user.id,
            role: user.role,
        };
        return this.makeToken(payload);
    }
    makeToken(payload) {
        return {
            access_token: this.jwtService.sign(payload, {
                expiresIn: '15m',
                secret: this.config.get('ACCESS_SECRET_KEY'),
            }),
            refresh_token: this.jwtService.sign(payload, {
                expiresIn: '7d',
                secret: this.config.get('REFRESH_SECRET_KEY'),
            }),
        };
    }
    async profile(id) {
        return await this.userService.findOne(id);
    }
    async register(dto, avatar) {
        const user = await this.userService.create(Object.assign(Object.assign({}, dto), { isActive: true, role: user_roles_enum_1.UserRolesEnum.USER }), avatar);
        return this.login(user);
    }
    async changePassword(id, dto) {
        const user = await this.userService.findOneWithPassword(id);
        if (!user) {
            return {
                isChanged: false,
                message: 'Пользователь не существует',
                status: common_1.HttpStatus.NOT_FOUND,
            };
        }
        const passwordEquals = await bcryptjs.compare(dto.oldPassword, user.password);
        if (!passwordEquals) {
            return {
                isChanged: false,
                message: 'Старый пароль неверный',
                oldPassword: ['Старый пароль неверный'],
                status: common_1.HttpStatus.BAD_REQUEST,
            };
        }
        const hashPassword = await bcryptjs.hash(dto.newPassword, 10);
        await this.userRepository.update({ id }, { password: hashPassword });
        return {
            isChanged: true,
            message: 'Пароль был успешно изменен',
            status: common_1.HttpStatus.OK,
        };
    }
    async changeProfile(id, dto, avatar = null) {
        const user = await this.userService.findOne(id);
        if (avatar) {
            if (user.avatar)
                this.filesService.removeFile(user.avatar, false);
            const avatarPath = this.filesService.createFile('user_avatars', avatar);
            await this.userRepository.update({ id }, Object.assign(Object.assign({}, dto), { avatar: avatarPath }));
        }
        else {
            await this.userRepository.update({ id }, dto);
        }
        const updatedUser = await this.userService.findOne(id);
        return this.login(updatedUser);
    }
};
AuthService = __decorate([
    (0, common_1.Injectable)(),
    __param(5, (0, typeorm_2.InjectRepository)(user_entity_1.UserEntity)),
    __metadata("design:paramtypes", [user_service_1.UserService,
        jwt_1.JwtService,
        config_1.ConfigService,
        file_service_1.FileService,
        utils_service_1.UtilsService,
        typeorm_1.Repository])
], AuthService);
exports.AuthService = AuthService;
//# sourceMappingURL=auth.service.js.map
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
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserController = void 0;
const common_1 = require("@nestjs/common");
const user_service_1 = require("./user.service");
const user_roles_enum_1 = require("./user-roles.enum");
const create_user_dto_1 = require("./dto/create-user.dto");
const update_user_dto_1 = require("./dto/update-user.dto");
const config_1 = require("@nestjs/config");
const user_query_dto_1 = require("./dto/user-query.dto");
const platform_express_1 = require("@nestjs/platform-express");
const swagger_1 = require("@nestjs/swagger");
const role_auth_guard_1 = require("../auth/guards/role-auth.guard");
const roles_auth_decorator_1 = require("../auth/decorators/roles-auth.decorator");
let UserController = class UserController {
    constructor(userService, config) {
        this.userService = userService;
        this.config = config;
    }
    findAll(queryDto) {
        return this.userService.findAll(queryDto);
    }
    create(dto, avatar = null) {
        return this.userService.create(dto, avatar);
    }
    findOne(id) {
        const user = this.userService.findOne(+id);
        console.log(user);
        if (!user)
            throw new common_1.NotFoundException({ message: 'User not found' });
        return user;
    }
    update(id, dto, avatar = null) {
        return this.userService.update(+id, dto, avatar);
    }
    async remove(id) {
        await this.userService.remove(+id);
    }
};
__decorate([
    (0, roles_auth_decorator_1.Roles)(user_roles_enum_1.UserRolesEnum.ADMIN),
    (0, common_1.UseGuards)(role_auth_guard_1.RoleAuthGuard),
    (0, common_1.Get)(),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [user_query_dto_1.UserQueryDto]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "findAll", null);
__decorate([
    (0, common_1.UseInterceptors)((0, platform_express_1.FileInterceptor)('avatar')),
    (0, roles_auth_decorator_1.Roles)(user_roles_enum_1.UserRolesEnum.ADMIN),
    (0, common_1.UseGuards)(role_auth_guard_1.RoleAuthGuard),
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.UploadedFile)(new common_1.ParseFilePipe({
        validators: [
            new common_1.MaxFileSizeValidator({ maxSize: 3000000 }),
            new common_1.FileTypeValidator({ fileType: 'image/*' }),
        ],
        fileIsRequired: false,
    }))),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_user_dto_1.CreateUserDto, Object]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "create", null);
__decorate([
    (0, roles_auth_decorator_1.Roles)(user_roles_enum_1.UserRolesEnum.ADMIN),
    (0, common_1.UseGuards)(role_auth_guard_1.RoleAuthGuard),
    (0, common_1.Get)('/:id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "findOne", null);
__decorate([
    (0, common_1.UseInterceptors)((0, platform_express_1.FileInterceptor)('avatar')),
    (0, roles_auth_decorator_1.Roles)(user_roles_enum_1.UserRolesEnum.ADMIN),
    (0, common_1.UseGuards)(role_auth_guard_1.RoleAuthGuard),
    (0, common_1.Patch)('/:id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __param(2, (0, common_1.UploadedFile)(new common_1.ParseFilePipe({
        validators: [
            new common_1.MaxFileSizeValidator({ maxSize: 3000000 }),
            new common_1.FileTypeValidator({ fileType: 'image/*' }),
        ],
        fileIsRequired: false,
    }))),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, update_user_dto_1.UpdateUserDto, Object]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "update", null);
__decorate([
    (0, roles_auth_decorator_1.Roles)(user_roles_enum_1.UserRolesEnum.ADMIN),
    (0, common_1.UseGuards)(role_auth_guard_1.RoleAuthGuard),
    (0, common_1.HttpCode)(common_1.HttpStatus.NO_CONTENT),
    (0, common_1.Delete)('/:id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "remove", null);
UserController = __decorate([
    (0, swagger_1.ApiTags)('User'),
    (0, swagger_1.ApiBearerAuth)(),
    (0, common_1.Controller)('/users'),
    __metadata("design:paramtypes", [user_service_1.UserService,
        config_1.ConfigService])
], UserController);
exports.UserController = UserController;
//# sourceMappingURL=user.controller.js.map
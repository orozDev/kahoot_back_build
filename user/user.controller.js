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
const auth_guards_1 = require("../auth/auth.guards");
const roles_auth_decorator_1 = require("../auth/roles-auth.decorator");
const create_user_dto_1 = require("./dto/create-user.dto");
const update_user_dto_1 = require("./dto/update-user.dto");
const config_1 = require("@nestjs/config");
const user_query_dto_1 = require("./dto/user-query.dto");
const platform_express_1 = require("@nestjs/platform-express");
const swagger_1 = require("@nestjs/swagger");
let UserController = class UserController {
    constructor(userService, config) {
        this.userService = userService;
        this.config = config;
    }
    getAll(queryDto) {
        return this.userService.getAll(queryDto);
    }
    create(dto, avatar = null) {
        return this.userService.create(dto, avatar);
    }
    getOne(id) {
        return this.userService.getOne(id);
    }
    update(id, dto) {
        return this.userService.update(id, dto);
    }
    async delete(id) {
        await this.userService.delete(id);
    }
};
__decorate([
    (0, roles_auth_decorator_1.Roles)(user_roles_enum_1.UserRolesEnum.ADMIN),
    (0, common_1.UseGuards)(auth_guards_1.RoleAuthGuard),
    (0, common_1.Get)(),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [user_query_dto_1.UserQueryDto]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "getAll", null);
__decorate([
    (0, common_1.UseInterceptors)((0, platform_express_1.FileInterceptor)('avatar')),
    (0, roles_auth_decorator_1.Roles)(user_roles_enum_1.UserRolesEnum.ADMIN),
    (0, common_1.UseGuards)(auth_guards_1.RoleAuthGuard),
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
    (0, common_1.UseGuards)(auth_guards_1.RoleAuthGuard),
    (0, common_1.Get)('/:id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "getOne", null);
__decorate([
    (0, roles_auth_decorator_1.Roles)(user_roles_enum_1.UserRolesEnum.ADMIN),
    (0, common_1.UseGuards)(auth_guards_1.RoleAuthGuard),
    (0, common_1.Patch)('/:id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, update_user_dto_1.UpdateUserDto]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "update", null);
__decorate([
    (0, roles_auth_decorator_1.Roles)(user_roles_enum_1.UserRolesEnum.ADMIN),
    (0, common_1.UseGuards)(auth_guards_1.RoleAuthGuard),
    (0, common_1.HttpCode)(common_1.HttpStatus.NO_CONTENT),
    (0, common_1.Delete)('/:id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "delete", null);
UserController = __decorate([
    (0, swagger_1.ApiTags)('users'),
    (0, swagger_1.ApiBearerAuth)(),
    (0, common_1.Controller)('/users'),
    __metadata("design:paramtypes", [user_service_1.UserService,
        config_1.ConfigService])
], UserController);
exports.UserController = UserController;
//# sourceMappingURL=user.controller.js.map
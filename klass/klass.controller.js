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
exports.KlassController = void 0;
const common_1 = require("@nestjs/common");
const klass_service_1 = require("./klass.service");
const create_klass_dto_1 = require("./dto/create-klass.dto");
const update_klass_dto_1 = require("./dto/update-klass.dto");
const swagger_1 = require("@nestjs/swagger");
const user_roles_enum_1 = require("../user/enum/user-roles.enum");
const role_auth_guard_1 = require("../auth/guards/role-auth.guard");
const roles_auth_decorator_1 = require("../auth/decorators/roles-auth.decorator");
const klass_query_dto_1 = require("./dto/klass-query.dto");
let KlassController = class KlassController {
    constructor(klassService) {
        this.klassService = klassService;
    }
    create(createKlassDto) {
        return this.klassService.create(createKlassDto);
    }
    findAll(query) {
        return this.klassService.findAll(query);
    }
    findOne(id) {
        return this.klassService.findOne(+id);
    }
    update(id, updateKlassDto) {
        return this.klassService.update(+id, updateKlassDto);
    }
    remove(id) {
        return this.klassService.remove(+id);
    }
};
__decorate([
    (0, swagger_1.ApiBearerAuth)(),
    (0, roles_auth_decorator_1.Roles)(user_roles_enum_1.UserRolesEnum.ADMIN, user_roles_enum_1.UserRolesEnum.MANAGER),
    (0, common_1.UseGuards)(role_auth_guard_1.RoleAuthGuard),
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_klass_dto_1.CreateKlassDto]),
    __metadata("design:returntype", void 0)
], KlassController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [klass_query_dto_1.KlassQueryDto]),
    __metadata("design:returntype", void 0)
], KlassController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], KlassController.prototype, "findOne", null);
__decorate([
    (0, swagger_1.ApiBearerAuth)(),
    (0, roles_auth_decorator_1.Roles)(user_roles_enum_1.UserRolesEnum.ADMIN, user_roles_enum_1.UserRolesEnum.MANAGER),
    (0, common_1.UseGuards)(role_auth_guard_1.RoleAuthGuard),
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_klass_dto_1.UpdateKlassDto]),
    __metadata("design:returntype", void 0)
], KlassController.prototype, "update", null);
__decorate([
    (0, swagger_1.ApiBearerAuth)(),
    (0, roles_auth_decorator_1.Roles)(user_roles_enum_1.UserRolesEnum.ADMIN, user_roles_enum_1.UserRolesEnum.MANAGER),
    (0, common_1.UseGuards)(role_auth_guard_1.RoleAuthGuard),
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], KlassController.prototype, "remove", null);
KlassController = __decorate([
    (0, swagger_1.ApiTags)('Klass'),
    (0, common_1.Controller)('/klasses'),
    __metadata("design:paramtypes", [klass_service_1.KlassService])
], KlassController);
exports.KlassController = KlassController;
//# sourceMappingURL=klass.controller.js.map
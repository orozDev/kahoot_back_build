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
const roles_auth_decorator_1 = require("../auth/roles-auth.decorator");
const user_roles_enum_1 = require("../user/user-roles.enum");
const paginationQueryDto_1 = require("../utils/dto/paginationQueryDto");
const auth_guards_1 = require("../auth/auth.guards");
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
    (0, roles_auth_decorator_1.Roles)(user_roles_enum_1.UserRolesEnum.ADMIN),
    (0, common_1.UseGuards)(auth_guards_1.RoleAuthGuard),
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
    __metadata("design:paramtypes", [paginationQueryDto_1.PaginationQueryDto]),
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
    (0, roles_auth_decorator_1.Roles)(user_roles_enum_1.UserRolesEnum.ADMIN),
    (0, common_1.UseGuards)(auth_guards_1.RoleAuthGuard),
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_klass_dto_1.UpdateKlassDto]),
    __metadata("design:returntype", void 0)
], KlassController.prototype, "update", null);
__decorate([
    (0, swagger_1.ApiBearerAuth)(),
    (0, roles_auth_decorator_1.Roles)(user_roles_enum_1.UserRolesEnum.ADMIN),
    (0, common_1.UseGuards)(auth_guards_1.RoleAuthGuard),
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], KlassController.prototype, "remove", null);
KlassController = __decorate([
    (0, swagger_1.ApiTags)('klass'),
    (0, common_1.Controller)('/klasses'),
    __metadata("design:paramtypes", [klass_service_1.KlassService])
], KlassController);
exports.KlassController = KlassController;
//# sourceMappingURL=klass.controller.js.map
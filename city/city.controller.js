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
exports.CityController = void 0;
const common_1 = require("@nestjs/common");
const city_service_1 = require("./city.service");
const create_city_dto_1 = require("./dto/create-city.dto");
const update_city_dto_1 = require("./dto/update-city.dto");
const paginationQueryDto_1 = require("../utils/dto/paginationQueryDto");
const swagger_1 = require("@nestjs/swagger");
const roles_auth_decorator_1 = require("../auth/decorators/roles-auth.decorator");
const user_roles_enum_1 = require("../user/enum/user-roles.enum");
const role_auth_guard_1 = require("../auth/guards/role-auth.guard");
let CityController = class CityController {
    constructor(cityService) {
        this.cityService = cityService;
    }
    create(createCityDto) {
        return this.cityService.create(createCityDto);
    }
    findAll(query) {
        return this.cityService.findAll(query);
    }
    findOne(id) {
        return this.cityService.findOne(+id);
    }
    update(id, updateCityDto) {
        return this.cityService.update(+id, updateCityDto);
    }
    remove(id) {
        return this.cityService.remove(+id);
    }
};
__decorate([
    (0, swagger_1.ApiBearerAuth)(),
    (0, roles_auth_decorator_1.Roles)(user_roles_enum_1.UserRolesEnum.ADMIN),
    (0, common_1.UseGuards)(role_auth_guard_1.RoleAuthGuard),
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_city_dto_1.CreateCityDto]),
    __metadata("design:returntype", void 0)
], CityController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [paginationQueryDto_1.PaginationQueryDto]),
    __metadata("design:returntype", void 0)
], CityController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], CityController.prototype, "findOne", null);
__decorate([
    (0, swagger_1.ApiBearerAuth)(),
    (0, roles_auth_decorator_1.Roles)(user_roles_enum_1.UserRolesEnum.ADMIN),
    (0, common_1.UseGuards)(role_auth_guard_1.RoleAuthGuard),
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_city_dto_1.UpdateCityDto]),
    __metadata("design:returntype", void 0)
], CityController.prototype, "update", null);
__decorate([
    (0, swagger_1.ApiBearerAuth)(),
    (0, roles_auth_decorator_1.Roles)(user_roles_enum_1.UserRolesEnum.ADMIN),
    (0, common_1.UseGuards)(role_auth_guard_1.RoleAuthGuard),
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], CityController.prototype, "remove", null);
CityController = __decorate([
    (0, swagger_1.ApiTags)('City'),
    (0, common_1.Controller)('/cities'),
    __metadata("design:paramtypes", [city_service_1.CityService])
], CityController);
exports.CityController = CityController;
//# sourceMappingURL=city.controller.js.map
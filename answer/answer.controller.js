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
exports.AnswerController = void 0;
const common_1 = require("@nestjs/common");
const nestjs_form_data_1 = require("nestjs-form-data");
const answer_qeury_dto_1 = require("./dto/answer-qeury.dto");
const update_answer_dto_1 = require("./dto/update-answer.dto");
const answer_service_1 = require("./answer.service");
const swagger_1 = require("@nestjs/swagger");
const user_roles_enum_1 = require("../user/user-roles.enum");
const role_auth_guard_1 = require("../auth/guards/role-auth.guard");
const roles_auth_decorator_1 = require("../auth/decorators/roles-auth.decorator");
const answer_owner_guard_1 = require("./guards/answer-owner.guard");
let AnswerController = class AnswerController {
    constructor(answerService) {
        this.answerService = answerService;
    }
    findAll(query) {
        return this.answerService.findAll(query);
    }
    findOne(id) {
        return this.answerService.findOne(+id);
    }
    update(id, updateAnswerDto) {
        return this.answerService.update(+id, updateAnswerDto);
    }
    remove(id) {
        return this.answerService.remove(+id);
    }
};
__decorate([
    (0, common_1.Get)(),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [answer_qeury_dto_1.AnswerQueryDto]),
    __metadata("design:returntype", void 0)
], AnswerController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], AnswerController.prototype, "findOne", null);
__decorate([
    (0, swagger_1.ApiBearerAuth)(),
    (0, roles_auth_decorator_1.Roles)(user_roles_enum_1.UserRolesEnum.ADMIN, user_roles_enum_1.UserRolesEnum.TEACHER),
    (0, common_1.UseGuards)(role_auth_guard_1.RoleAuthGuard),
    (0, common_1.UseGuards)(answer_owner_guard_1.QuestionOwnerGuard),
    (0, common_1.Patch)(':id'),
    (0, nestjs_form_data_1.FormDataRequest)(),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_answer_dto_1.UpdateAnswerDto]),
    __metadata("design:returntype", void 0)
], AnswerController.prototype, "update", null);
__decorate([
    (0, swagger_1.ApiBearerAuth)(),
    (0, roles_auth_decorator_1.Roles)(user_roles_enum_1.UserRolesEnum.ADMIN, user_roles_enum_1.UserRolesEnum.TEACHER),
    (0, common_1.UseGuards)(role_auth_guard_1.RoleAuthGuard),
    (0, common_1.UseGuards)(answer_owner_guard_1.QuestionOwnerGuard),
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], AnswerController.prototype, "remove", null);
AnswerController = __decorate([
    (0, swagger_1.ApiTags)('Answer'),
    (0, common_1.Controller)('/answers'),
    __metadata("design:paramtypes", [answer_service_1.AnswerService])
], AnswerController);
exports.AnswerController = AnswerController;
//# sourceMappingURL=answer.controller.js.map
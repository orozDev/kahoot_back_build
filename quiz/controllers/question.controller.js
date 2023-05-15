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
exports.QuestionController = void 0;
const common_1 = require("@nestjs/common");
const nestjs_form_data_1 = require("nestjs-form-data");
const create_question_dto_1 = require("../dto/question/create-question.dto");
const question_query_dto_1 = require("../dto/question/question-query.dto");
const update_question_dto_1 = require("../dto/question/update-question.dto");
const question_service_1 = require("../services/question.service");
const swagger_1 = require("@nestjs/swagger");
const user_roles_enum_1 = require("../../user/enum/user-roles.enum");
const role_auth_guard_1 = require("../../auth/guards/role-auth.guard");
const roles_auth_decorator_1 = require("../../auth/decorators/roles-auth.decorator");
const question_owner_guard_1 = require("../guards/question-owner.guard");
let QuestionController = class QuestionController {
    constructor(questionService) {
        this.questionService = questionService;
    }
    create(createQuestionDto) {
        return this.questionService.create(createQuestionDto);
    }
    findAll(query) {
        return this.questionService.findAll(query);
    }
    findOne(id) {
        return this.questionService.findOne(+id);
    }
    update(id, updateQuestionDto) {
        return this.questionService.update(+id, updateQuestionDto);
    }
    remove(id) {
        return this.questionService.remove(+id);
    }
};
__decorate([
    (0, swagger_1.ApiBearerAuth)(),
    (0, roles_auth_decorator_1.Roles)(user_roles_enum_1.UserRolesEnum.ADMIN, user_roles_enum_1.UserRolesEnum.TEACHER, user_roles_enum_1.UserRolesEnum.MANAGER),
    (0, common_1.UseGuards)(role_auth_guard_1.RoleAuthGuard),
    (0, common_1.Post)(),
    (0, nestjs_form_data_1.FormDataRequest)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_question_dto_1.CreateQuestionDto]),
    __metadata("design:returntype", void 0)
], QuestionController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [question_query_dto_1.QuestionQueryDto]),
    __metadata("design:returntype", void 0)
], QuestionController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], QuestionController.prototype, "findOne", null);
__decorate([
    (0, swagger_1.ApiBearerAuth)(),
    (0, roles_auth_decorator_1.Roles)(user_roles_enum_1.UserRolesEnum.ADMIN, user_roles_enum_1.UserRolesEnum.TEACHER, user_roles_enum_1.UserRolesEnum.MANAGER),
    (0, common_1.UseGuards)(role_auth_guard_1.RoleAuthGuard),
    (0, common_1.UseGuards)(question_owner_guard_1.QuestionOwnerGuard),
    (0, common_1.Patch)(':id'),
    (0, nestjs_form_data_1.FormDataRequest)(),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_question_dto_1.UpdateQuestionDto]),
    __metadata("design:returntype", void 0)
], QuestionController.prototype, "update", null);
__decorate([
    (0, swagger_1.ApiBearerAuth)(),
    (0, roles_auth_decorator_1.Roles)(user_roles_enum_1.UserRolesEnum.ADMIN, user_roles_enum_1.UserRolesEnum.TEACHER, user_roles_enum_1.UserRolesEnum.MANAGER),
    (0, common_1.UseGuards)(role_auth_guard_1.RoleAuthGuard),
    (0, common_1.UseGuards)(question_owner_guard_1.QuestionOwnerGuard),
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], QuestionController.prototype, "remove", null);
QuestionController = __decorate([
    (0, swagger_1.ApiTags)('Question'),
    (0, common_1.Controller)('/questions'),
    __metadata("design:paramtypes", [question_service_1.QuestionService])
], QuestionController);
exports.QuestionController = QuestionController;
//# sourceMappingURL=question.controller.js.map
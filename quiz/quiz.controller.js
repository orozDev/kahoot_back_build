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
exports.QuizController = void 0;
const common_1 = require("@nestjs/common");
const quiz_service_1 = require("./quiz.service");
const create_quiz_dto_1 = require("./dto/create-quiz.dto");
const update_quiz_dto_1 = require("./dto/update-quiz.dto");
const swagger_1 = require("@nestjs/swagger");
const nestjs_form_data_1 = require("nestjs-form-data");
const quiz_query_dto_1 = require("./dto/quiz-query.dto");
const user_roles_enum_1 = require("../user/user-roles.enum");
const quiz_owner_guard_1 = require("./guards/quiz-owner.guard");
const roles_auth_decorator_1 = require("../auth/decorators/roles-auth.decorator");
const role_auth_guard_1 = require("../auth/guards/role-auth.guard");
let QuizController = class QuizController {
    constructor(quizService) {
        this.quizService = quizService;
    }
    create(createQuizDto) {
        return this.quizService.create(createQuizDto);
    }
    findAll(query) {
        return this.quizService.findAll(query);
    }
    findOne(id) {
        return this.quizService.findOne(+id);
    }
    update(id, updateQuizDto) {
        return this.quizService.update(+id, updateQuizDto);
    }
    remove(id) {
        return this.quizService.remove(+id);
    }
};
__decorate([
    (0, swagger_1.ApiBearerAuth)(),
    (0, roles_auth_decorator_1.Roles)(user_roles_enum_1.UserRolesEnum.ADMIN, user_roles_enum_1.UserRolesEnum.TEACHER),
    (0, common_1.UseGuards)(role_auth_guard_1.RoleAuthGuard),
    (0, common_1.Post)(),
    (0, nestjs_form_data_1.FormDataRequest)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_quiz_dto_1.CreateQuizDto]),
    __metadata("design:returntype", void 0)
], QuizController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [quiz_query_dto_1.QuizQueryDto]),
    __metadata("design:returntype", void 0)
], QuizController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], QuizController.prototype, "findOne", null);
__decorate([
    (0, swagger_1.ApiBearerAuth)(),
    (0, roles_auth_decorator_1.Roles)(user_roles_enum_1.UserRolesEnum.ADMIN, user_roles_enum_1.UserRolesEnum.TEACHER),
    (0, common_1.UseGuards)(role_auth_guard_1.RoleAuthGuard),
    (0, common_1.UseGuards)(quiz_owner_guard_1.QuizOwnerGuard),
    (0, common_1.Patch)(':id'),
    (0, nestjs_form_data_1.FormDataRequest)(),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_quiz_dto_1.UpdateQuizDto]),
    __metadata("design:returntype", void 0)
], QuizController.prototype, "update", null);
__decorate([
    (0, swagger_1.ApiBearerAuth)(),
    (0, roles_auth_decorator_1.Roles)(user_roles_enum_1.UserRolesEnum.ADMIN, user_roles_enum_1.UserRolesEnum.TEACHER),
    (0, common_1.UseGuards)(role_auth_guard_1.RoleAuthGuard),
    (0, common_1.UseGuards)(quiz_owner_guard_1.QuizOwnerGuard),
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], QuizController.prototype, "remove", null);
QuizController = __decorate([
    (0, swagger_1.ApiTags)('Quiz'),
    (0, common_1.Controller)('/quizzers'),
    __metadata("design:paramtypes", [quiz_service_1.QuizService])
], QuizController);
exports.QuizController = QuizController;
//# sourceMappingURL=quiz.controller.js.map
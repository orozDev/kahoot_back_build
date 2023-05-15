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
exports.SelectedAnswerGuard = void 0;
const common_1 = require("@nestjs/common");
const jwt_auth_guard_1 = require("../../auth/guards/jwt-auth.guard");
const user_roles_enum_1 = require("../../user/enum/user-roles.enum");
const selected_answer_service_1 = require("../services/selected-answer.service");
let SelectedAnswerGuard = class SelectedAnswerGuard extends jwt_auth_guard_1.JwtAuthGuard {
    constructor(selectedAnswerService) {
        super();
        this.selectedAnswerService = selectedAnswerService;
    }
    async canActivate(context) {
        var _a, _b;
        await super.canActivate(context);
        const request = context.switchToHttp().getRequest();
        const selectedAnswerId = +request._parsedUrl.pathname.split('/').at(-1);
        const selectedAnswer = await this.selectedAnswerService.findOne(selectedAnswerId);
        if (request.user &&
            request.user.id !== ((_a = selectedAnswer.participant.user) === null || _a === void 0 ? void 0 : _a.id) &&
            ((_b = request.user) === null || _b === void 0 ? void 0 : _b.role) !== user_roles_enum_1.UserRolesEnum.ADMIN) {
            throw new common_1.ForbiddenException({
                message: 'User is not owner of this participant',
            });
        }
        return true;
    }
};
SelectedAnswerGuard = __decorate([
    __param(0, (0, common_1.Inject)(selected_answer_service_1.SelectedAnswerService)),
    __metadata("design:paramtypes", [selected_answer_service_1.SelectedAnswerService])
], SelectedAnswerGuard);
exports.SelectedAnswerGuard = SelectedAnswerGuard;
//# sourceMappingURL=selected-answer.guard.js.map
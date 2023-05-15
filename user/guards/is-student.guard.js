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
exports.IsStudentGuard = void 0;
const common_1 = require("@nestjs/common");
const jwt_auth_guard_1 = require("../../auth/guards/jwt-auth.guard");
const user_roles_enum_1 = require("../enum/user-roles.enum");
const student_service_1 = require("../services/student.service");
let IsStudentGuard = class IsStudentGuard extends jwt_auth_guard_1.JwtAuthGuard {
    constructor(studentService) {
        super();
        this.studentService = studentService;
    }
    async canActivate(context) {
        const previousResult = await super.canActivate(context);
        if (!previousResult) {
            return false;
        }
        const req = context.switchToHttp().getRequest();
        const studentId = +req._parsedUrl.pathname.split('/').at(-1);
        const student = await this.studentService.findOne(studentId);
        return (student.user.id === req.user.id || req.user.role === user_roles_enum_1.UserRolesEnum.ADMIN);
    }
};
IsStudentGuard = __decorate([
    (0, common_1.Injectable)({}),
    __param(0, (0, common_1.Inject)(student_service_1.StudentService)),
    __metadata("design:paramtypes", [student_service_1.StudentService])
], IsStudentGuard);
exports.IsStudentGuard = IsStudentGuard;
//# sourceMappingURL=is-student.guard.js.map
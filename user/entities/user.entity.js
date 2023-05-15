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
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserEntity = void 0;
const user_roles_enum_1 = require("../enum/user-roles.enum");
const typeorm_1 = require("typeorm");
const base_entity_options_1 = require("../../options/base-entity.options");
const testing_entity_1 = require("../../testing/entities/testing.entity");
const student_entity_1 = require("./student.entity");
const teacher_entity_1 = require("./teacher.entity");
const quiz_entity_1 = require("../../quiz/entities/quiz.entity");
let UserEntity = class UserEntity extends base_entity_options_1.BaseEntity {
};
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], UserEntity.prototype, "avatar", void 0);
__decorate([
    (0, typeorm_1.Column)({ unique: true }),
    __metadata("design:type", String)
], UserEntity.prototype, "username", void 0);
__decorate([
    (0, typeorm_1.Column)({ select: false }),
    __metadata("design:type", String)
], UserEntity.prototype, "password", void 0);
__decorate([
    (0, typeorm_1.Column)({ unique: true }),
    __metadata("design:type", String)
], UserEntity.prototype, "phone", void 0);
__decorate([
    (0, typeorm_1.Column)({ unique: true }),
    __metadata("design:type", String)
], UserEntity.prototype, "email", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'first_name' }),
    __metadata("design:type", String)
], UserEntity.prototype, "firstName", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'last_name' }),
    __metadata("design:type", String)
], UserEntity.prototype, "lastName", void 0);
__decorate([
    (0, typeorm_1.Column)({ default: true, name: 'is_active' }),
    __metadata("design:type", Boolean)
], UserEntity.prototype, "isActive", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: 'enum',
        enum: user_roles_enum_1.UserRolesEnum,
        default: user_roles_enum_1.UserRolesEnum.USER,
    }),
    __metadata("design:type", String)
], UserEntity.prototype, "role", void 0);
__decorate([
    (0, typeorm_1.OneToOne)(() => student_entity_1.StudentEntity, (student) => student.user, {
        onDelete: 'SET NULL',
        nullable: true,
        eager: true,
    }),
    __metadata("design:type", student_entity_1.StudentEntity)
], UserEntity.prototype, "student", void 0);
__decorate([
    (0, typeorm_1.OneToOne)(() => teacher_entity_1.TeacherEntity, (teacher) => teacher.user, {
        onDelete: 'SET NULL',
        nullable: true,
        eager: true,
    }),
    __metadata("design:type", teacher_entity_1.TeacherEntity)
], UserEntity.prototype, "teacher", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => quiz_entity_1.QuizEntity, (quiz) => quiz.user),
    __metadata("design:type", Array)
], UserEntity.prototype, "quizzers", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => testing_entity_1.TestingEntity, (testing) => testing.owner),
    __metadata("design:type", Array)
], UserEntity.prototype, "completedTests", void 0);
UserEntity = __decorate([
    (0, typeorm_1.Entity)('user')
], UserEntity);
exports.UserEntity = UserEntity;
//# sourceMappingURL=user.entity.js.map
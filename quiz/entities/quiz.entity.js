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
exports.QuizEntity = void 0;
const base_entity_options_1 = require("../../options/base-entity.options");
const typeorm_1 = require("typeorm");
const subject_entity_1 = require("../../subject/entities/subject.entity");
const klass_entity_1 = require("../../klass/entities/klass.entity");
const question_entity_1 = require("./question.entity");
const user_entity_1 = require("../../user/entities/user.entity");
let QuizEntity = class QuizEntity extends base_entity_options_1.BaseEntity {
};
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], QuizEntity.prototype, "title", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: '250', nullable: true }),
    __metadata("design:type", String)
], QuizEntity.prototype, "description", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], QuizEntity.prototype, "image", void 0);
__decorate([
    (0, typeorm_1.ManyToMany)(() => subject_entity_1.SubjectEntity, (subject) => subject.quizzers, {
        eager: true,
    }),
    (0, typeorm_1.JoinTable)(),
    __metadata("design:type", Array)
], QuizEntity.prototype, "subjects", void 0);
__decorate([
    (0, typeorm_1.ManyToMany)(() => klass_entity_1.KlassEntity, (klass) => klass.quizzers, {
        nullable: true,
        eager: true,
    }),
    (0, typeorm_1.JoinTable)(),
    __metadata("design:type", Array)
], QuizEntity.prototype, "klasses", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => question_entity_1.QuestionEntity, (question) => question.quiz),
    __metadata("design:type", Array)
], QuizEntity.prototype, "questions", void 0);
__decorate([
    (0, typeorm_1.RelationId)((quiz) => quiz.questions),
    __metadata("design:type", Array)
], QuizEntity.prototype, "questionIds", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => user_entity_1.UserEntity, (user) => user.quizzers, {
        eager: true,
        nullable: true,
    }),
    (0, typeorm_1.JoinColumn)({ name: 'user_id' }),
    __metadata("design:type", user_entity_1.UserEntity)
], QuizEntity.prototype, "user", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'boolean', default: false, name: 'is_ort' }),
    __metadata("design:type", Boolean)
], QuizEntity.prototype, "isORT", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'boolean', default: true, name: 'is_published' }),
    __metadata("design:type", Boolean)
], QuizEntity.prototype, "isPublished", void 0);
QuizEntity = __decorate([
    (0, typeorm_1.Entity)('quiz')
], QuizEntity);
exports.QuizEntity = QuizEntity;
//# sourceMappingURL=quiz.entity.js.map
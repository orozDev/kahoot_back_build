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
exports.QuestionEntity = void 0;
const typeorm_1 = require("typeorm");
const base_entity_options_1 = require("../../options/base-entity.options");
const quiz_entity_1 = require("./quiz.entity");
const answer_entity_1 = require("./answer.entity");
let QuestionEntity = class QuestionEntity extends base_entity_options_1.BaseEntity {
};
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], QuestionEntity.prototype, "title", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: '250', nullable: true }),
    __metadata("design:type", String)
], QuestionEntity.prototype, "content", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], QuestionEntity.prototype, "image", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'int4', default: 30 }),
    __metadata("design:type", Number)
], QuestionEntity.prototype, "time", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => quiz_entity_1.QuizEntity, (quiz) => quiz.questions, {
        onDelete: 'CASCADE',
    }),
    (0, typeorm_1.JoinColumn)({ name: 'quiz_id' }),
    __metadata("design:type", quiz_entity_1.QuizEntity)
], QuestionEntity.prototype, "quiz", void 0);
__decorate([
    (0, typeorm_1.RelationId)((question) => question.quiz),
    __metadata("design:type", Number)
], QuestionEntity.prototype, "quizId", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => answer_entity_1.AnswerEntity, (answer) => answer.question),
    __metadata("design:type", Array)
], QuestionEntity.prototype, "answers", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'int' }),
    __metadata("design:type", Number)
], QuestionEntity.prototype, "order", void 0);
QuestionEntity = __decorate([
    (0, typeorm_1.Entity)('question')
], QuestionEntity);
exports.QuestionEntity = QuestionEntity;
//# sourceMappingURL=question.entity.js.map
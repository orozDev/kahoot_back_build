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
exports.SelectedAnswerEntity = void 0;
const typeorm_1 = require("typeorm");
const base_entity_options_1 = require("../../options/base-entity.options");
const participant_entity_1 = require("./participant.entity");
const answer_entity_1 = require("../../answer/entities/answer.entity");
const question_entity_1 = require("../../question/entities/question.entity");
let SelectedAnswerEntity = class SelectedAnswerEntity extends base_entity_options_1.BaseEntity {
};
__decorate([
    (0, typeorm_1.ManyToOne)(() => participant_entity_1.ParticipantEntity, (participant) => participant.selectedAnswers, { onDelete: 'CASCADE' }),
    (0, typeorm_1.JoinColumn)({ name: 'participant_id' }),
    __metadata("design:type", participant_entity_1.ParticipantEntity)
], SelectedAnswerEntity.prototype, "participant", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => question_entity_1.QuestionEntity, null, { onDelete: 'SET NULL' }),
    (0, typeorm_1.JoinColumn)({ name: 'question_id' }),
    __metadata("design:type", question_entity_1.QuestionEntity)
], SelectedAnswerEntity.prototype, "question", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => answer_entity_1.AnswerEntity, null, { onDelete: 'SET NULL', eager: true }),
    (0, typeorm_1.JoinColumn)({ name: 'answer_id' }),
    __metadata("design:type", answer_entity_1.AnswerEntity)
], SelectedAnswerEntity.prototype, "answer", void 0);
__decorate([
    (0, typeorm_1.RelationId)((selectedAnswer) => selectedAnswer.question),
    __metadata("design:type", Number)
], SelectedAnswerEntity.prototype, "questionId", void 0);
__decorate([
    (0, typeorm_1.RelationId)((selectedAnswer) => selectedAnswer.participant),
    __metadata("design:type", participant_entity_1.ParticipantEntity)
], SelectedAnswerEntity.prototype, "participantId", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'int', default: 0 }),
    __metadata("design:type", Number)
], SelectedAnswerEntity.prototype, "point", void 0);
SelectedAnswerEntity = __decorate([
    (0, typeorm_1.Entity)('selected_answer')
], SelectedAnswerEntity);
exports.SelectedAnswerEntity = SelectedAnswerEntity;
//# sourceMappingURL=selected-answer.entity.js.map
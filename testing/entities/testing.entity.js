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
exports.TestingEntity = void 0;
const typeorm_1 = require("typeorm");
const base_entity_options_1 = require("../../options/base-entity.options");
const quiz_entity_1 = require("../../quiz/entities/quiz.entity");
const participant_entity_1 = require("./participant.entity");
const user_entity_1 = require("../../user/entities/user.entity");
const testing_status_enum_1 = require("../enum/testing-status.enum");
let TestingEntity = class TestingEntity extends base_entity_options_1.BaseEntity {
};
__decorate([
    (0, typeorm_1.ManyToOne)(() => quiz_entity_1.QuizEntity, null, { onDelete: 'CASCADE' }),
    (0, typeorm_1.JoinColumn)({ name: 'quiz_id' }),
    __metadata("design:type", quiz_entity_1.QuizEntity)
], TestingEntity.prototype, "quiz", void 0);
__decorate([
    (0, typeorm_1.RelationId)((testing) => testing.quiz),
    __metadata("design:type", Number)
], TestingEntity.prototype, "quizId", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => participant_entity_1.ParticipantEntity, (participant) => participant.testing),
    __metadata("design:type", Array)
], TestingEntity.prototype, "participants", void 0);
__decorate([
    (0, typeorm_1.Column)({ unique: true }),
    __metadata("design:type", Number)
], TestingEntity.prototype, "code", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: 'enum',
        enum: testing_status_enum_1.TestingStatusEnum,
        default: testing_status_enum_1.TestingStatusEnum.CREATED,
    }),
    __metadata("design:type", String)
], TestingEntity.prototype, "status", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => user_entity_1.UserEntity, null, { onDelete: 'SET NULL' }),
    (0, typeorm_1.JoinColumn)({ name: 'owner_id' }),
    __metadata("design:type", user_entity_1.UserEntity)
], TestingEntity.prototype, "owner", void 0);
TestingEntity = __decorate([
    (0, typeorm_1.Entity)('testing')
], TestingEntity);
exports.TestingEntity = TestingEntity;
//# sourceMappingURL=testing.entity.js.map
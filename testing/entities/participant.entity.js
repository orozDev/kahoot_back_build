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
exports.ParticipantEntity = void 0;
const typeorm_1 = require("typeorm");
const base_entity_options_1 = require("../../options/base-entity.options");
const user_entity_1 = require("../../user/entities/user.entity");
const testing_entity_1 = require("./testing.entity");
const selected_answer_entity_1 = require("./selected-answer.entity");
let ParticipantEntity = class ParticipantEntity extends base_entity_options_1.BaseEntity {
    makeTotalPoint() {
        var _a;
        this.totalPoint = (_a = this.selectedAnswers) === null || _a === void 0 ? void 0 : _a.reduce((sum, item) => sum + item.point, 0);
    }
};
__decorate([
    (0, typeorm_1.ManyToOne)(() => user_entity_1.UserEntity, (user) => user.completedTests, {
        nullable: true,
        onDelete: 'SET NULL',
        eager: true,
    }),
    (0, typeorm_1.JoinColumn)({ name: 'user_id' }),
    __metadata("design:type", user_entity_1.UserEntity)
], ParticipantEntity.prototype, "user", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], ParticipantEntity.prototype, "name", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => testing_entity_1.TestingEntity, (testing) => testing.participants, {
        onDelete: 'CASCADE',
    }),
    (0, typeorm_1.JoinColumn)({ name: 'testing_id' }),
    __metadata("design:type", testing_entity_1.TestingEntity)
], ParticipantEntity.prototype, "testing", void 0);
__decorate([
    (0, typeorm_1.RelationId)((participant) => participant.testing),
    __metadata("design:type", Number)
], ParticipantEntity.prototype, "testingId", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => selected_answer_entity_1.SelectedAnswerEntity, (selectedAnswer) => selectedAnswer.participant),
    __metadata("design:type", Array)
], ParticipantEntity.prototype, "selectedAnswers", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'total_point', default: 0 }),
    __metadata("design:type", Number)
], ParticipantEntity.prototype, "totalPoint", void 0);
__decorate([
    (0, typeorm_1.AfterLoad)(),
    (0, typeorm_1.AfterInsert)(),
    (0, typeorm_1.AfterUpdate)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], ParticipantEntity.prototype, "makeTotalPoint", null);
ParticipantEntity = __decorate([
    (0, typeorm_1.Entity)('participant')
], ParticipantEntity);
exports.ParticipantEntity = ParticipantEntity;
//# sourceMappingURL=participant.entity.js.map
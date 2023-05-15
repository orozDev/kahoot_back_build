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
exports.KlassEntity = void 0;
const base_entity_options_1 = require("../../options/base-entity.options");
const typeorm_1 = require("typeorm");
const quiz_entity_1 = require("../../quiz/entities/quiz.entity");
const school_entity_1 = require("../../school/entities/school.entity");
let KlassEntity = class KlassEntity extends base_entity_options_1.BaseEntity {
};
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], KlassEntity.prototype, "title", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => school_entity_1.SchoolEntity, (school) => school.klasses, {
        onDelete: 'CASCADE',
    }),
    (0, typeorm_1.JoinColumn)({ name: 'school_id' }),
    __metadata("design:type", school_entity_1.SchoolEntity)
], KlassEntity.prototype, "school", void 0);
__decorate([
    (0, typeorm_1.ManyToMany)(() => quiz_entity_1.QuizEntity, (quiz) => quiz.klasses),
    __metadata("design:type", Array)
], KlassEntity.prototype, "quizzers", void 0);
KlassEntity = __decorate([
    (0, typeorm_1.Entity)('klass')
], KlassEntity);
exports.KlassEntity = KlassEntity;
//# sourceMappingURL=klass.entity.js.map
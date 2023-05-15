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
exports.StudentEntity = void 0;
const base_entity_options_1 = require("../../options/base-entity.options");
const typeorm_1 = require("typeorm");
const user_entity_1 = require("./user.entity");
const klass_entity_1 = require("../../klass/entities/klass.entity");
let StudentEntity = class StudentEntity extends base_entity_options_1.BaseEntity {
};
__decorate([
    (0, typeorm_1.OneToOne)(() => user_entity_1.UserEntity, (user) => user.student, { onDelete: 'CASCADE' }),
    (0, typeorm_1.JoinColumn)({ name: 'user_id' }),
    __metadata("design:type", user_entity_1.UserEntity)
], StudentEntity.prototype, "user", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => klass_entity_1.KlassEntity, { eager: true, onDelete: 'RESTRICT' }),
    (0, typeorm_1.JoinColumn)({ name: 'klass_id' }),
    __metadata("design:type", klass_entity_1.KlassEntity)
], StudentEntity.prototype, "klass", void 0);
StudentEntity = __decorate([
    (0, typeorm_1.Entity)('student')
], StudentEntity);
exports.StudentEntity = StudentEntity;
//# sourceMappingURL=student.entity.js.map
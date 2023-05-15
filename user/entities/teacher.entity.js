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
exports.TeacherEntity = void 0;
const typeorm_1 = require("typeorm");
const user_entity_1 = require("./user.entity");
const school_entity_1 = require("../../school/entities/school.entity");
const base_entity_options_1 = require("../../options/base-entity.options");
let TeacherEntity = class TeacherEntity extends base_entity_options_1.BaseEntity {
};
__decorate([
    (0, typeorm_1.OneToOne)(() => user_entity_1.UserEntity, (user) => user.teacher, { onDelete: 'CASCADE' }),
    (0, typeorm_1.JoinColumn)({ name: 'user_id' }),
    __metadata("design:type", user_entity_1.UserEntity)
], TeacherEntity.prototype, "user", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => school_entity_1.SchoolEntity, { eager: true, onDelete: 'RESTRICT' }),
    (0, typeorm_1.JoinColumn)({ name: 'school_id' }),
    __metadata("design:type", school_entity_1.SchoolEntity)
], TeacherEntity.prototype, "school", void 0);
TeacherEntity = __decorate([
    (0, typeorm_1.Entity)('teacher')
], TeacherEntity);
exports.TeacherEntity = TeacherEntity;
//# sourceMappingURL=teacher.entity.js.map
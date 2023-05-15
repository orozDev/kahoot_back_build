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
exports.SchoolEntity = void 0;
const base_entity_options_1 = require("../../options/base-entity.options");
const typeorm_1 = require("typeorm");
const city_entity_1 = require("../../city/entities/city.entity");
const klass_entity_1 = require("../../klass/entities/klass.entity");
let SchoolEntity = class SchoolEntity extends base_entity_options_1.BaseEntity {
};
__decorate([
    (0, typeorm_1.Column)({ unique: true }),
    __metadata("design:type", String)
], SchoolEntity.prototype, "title", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], SchoolEntity.prototype, "description", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 2200, nullable: true, select: false }),
    __metadata("design:type", String)
], SchoolEntity.prototype, "content", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], SchoolEntity.prototype, "link", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => city_entity_1.CityEntity, { eager: true }),
    (0, typeorm_1.JoinTable)({ name: 'city_id' }),
    __metadata("design:type", city_entity_1.CityEntity)
], SchoolEntity.prototype, "city", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => klass_entity_1.KlassEntity, (klass) => klass.school),
    __metadata("design:type", Array)
], SchoolEntity.prototype, "klasses", void 0);
SchoolEntity = __decorate([
    (0, typeorm_1.Entity)('school')
], SchoolEntity);
exports.SchoolEntity = SchoolEntity;
//# sourceMappingURL=school.entity.js.map
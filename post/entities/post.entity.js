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
exports.PostEntity = void 0;
const typeorm_1 = require("typeorm");
const base_entity_options_1 = require("../../options/base-entity.options");
const user_entity_1 = require("../../user/entities/user.entity");
let PostEntity = class PostEntity extends base_entity_options_1.BaseEntity {
};
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], PostEntity.prototype, "title", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], PostEntity.prototype, "description", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], PostEntity.prototype, "image", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 2200 }),
    __metadata("design:type", String)
], PostEntity.prototype, "content", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => user_entity_1.UserEntity, { onDelete: 'CASCADE', eager: true }),
    (0, typeorm_1.JoinTable)({ name: 'author_id' }),
    __metadata("design:type", user_entity_1.UserEntity)
], PostEntity.prototype, "author", void 0);
PostEntity = __decorate([
    (0, typeorm_1.Entity)('post')
], PostEntity);
exports.PostEntity = PostEntity;
//# sourceMappingURL=post.entity.js.map
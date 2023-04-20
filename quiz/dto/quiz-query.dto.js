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
exports.QuizQueryDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
const class_transformer_1 = require("class-transformer");
const paginationQueryDto_1 = require("../../utils/dto/paginationQueryDto");
class QuizQueryDto extends paginationQueryDto_1.PaginationQueryDto {
}
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'oroz', required: false }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], QuizQueryDto.prototype, "search", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 1, required: false }),
    (0, class_validator_1.IsOptional)(),
    (0, class_transformer_1.Transform)(({ obj, key }) => Number(obj[key])),
    (0, class_validator_1.IsInt)(),
    __metadata("design:type", Number)
], QuizQueryDto.prototype, "category", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 1, required: false }),
    (0, class_validator_1.IsOptional)(),
    (0, class_transformer_1.Transform)(({ obj, key }) => Number(obj[key])),
    (0, class_validator_1.IsInt)(),
    __metadata("design:type", Number)
], QuizQueryDto.prototype, "klass", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 1, required: false }),
    (0, class_validator_1.IsOptional)(),
    (0, class_transformer_1.Transform)(({ obj, key }) => Number(obj[key])),
    (0, class_validator_1.IsInt)(),
    __metadata("design:type", Number)
], QuizQueryDto.prototype, "user", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: false, required: false }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsBoolean)(),
    (0, class_transformer_1.Transform)(({ obj, key }) => Boolean(obj[key])),
    __metadata("design:type", Boolean)
], QuizQueryDto.prototype, "isORT", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: false, required: false }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsBoolean)(),
    (0, class_transformer_1.Transform)(({ obj, key }) => Boolean(obj[key])),
    __metadata("design:type", Boolean)
], QuizQueryDto.prototype, "isPublished", void 0);
exports.QuizQueryDto = QuizQueryDto;
//# sourceMappingURL=quiz-query.dto.js.map
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
exports.CreateQuizDto = void 0;
const class_validator_1 = require("class-validator");
const class_transformer_1 = require("class-transformer");
const swagger_1 = require("@nestjs/swagger");
const nestjs_form_data_1 = require("nestjs-form-data");
class CreateQuizDto {
}
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Title of quiz' }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateQuizDto.prototype, "title", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Description of quiz' }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.MaxLength)(250),
    __metadata("design:type", String)
], CreateQuizDto.prototype, "description", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, nestjs_form_data_1.IsFile)(),
    (0, nestjs_form_data_1.MaxFileSize)(1e6),
    (0, nestjs_form_data_1.HasMimeType)(['image/jpeg', 'image/png']),
    __metadata("design:type", nestjs_form_data_1.MemoryStoredFile)
], CreateQuizDto.prototype, "image", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: [1, 2] }),
    (0, class_transformer_1.Type)(() => Number),
    (0, class_validator_1.IsArray)(),
    (0, class_validator_1.IsNumber)({}, { each: true }),
    __metadata("design:type", Array)
], CreateQuizDto.prototype, "subjects", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: [1, 2] }),
    (0, class_validator_1.IsOptional)(),
    (0, class_transformer_1.Type)(() => Number),
    (0, class_validator_1.IsArray)(),
    (0, class_validator_1.IsNumber)({}, { each: true }),
    __metadata("design:type", Array)
], CreateQuizDto.prototype, "klasses", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 30 }),
    (0, class_transformer_1.Transform)(({ obj, key }) => Number(obj[key])),
    (0, class_validator_1.IsInt)(),
    __metadata("design:type", Number)
], CreateQuizDto.prototype, "time", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 1 }),
    (0, class_validator_1.IsOptional)(),
    (0, class_transformer_1.Transform)(({ obj, key }) => Number(obj[key])),
    (0, class_validator_1.IsInt)(),
    __metadata("design:type", Number)
], CreateQuizDto.prototype, "user", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: false }),
    (0, class_validator_1.IsBoolean)(),
    (0, class_transformer_1.Transform)(({ obj, key }) => Boolean(obj[key])),
    __metadata("design:type", Boolean)
], CreateQuizDto.prototype, "isORT", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: false }),
    (0, class_validator_1.IsBoolean)(),
    (0, class_transformer_1.Transform)(({ obj, key }) => Boolean(obj[key])),
    __metadata("design:type", Boolean)
], CreateQuizDto.prototype, "isPublished", void 0);
exports.CreateQuizDto = CreateQuizDto;
//# sourceMappingURL=create-quiz.dto.js.map
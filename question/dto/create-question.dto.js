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
exports.CreateQuestionDto = void 0;
const class_validator_1 = require("class-validator");
const class_transformer_1 = require("class-transformer");
const nestjs_form_data_1 = require("nestjs-form-data");
const swagger_1 = require("@nestjs/swagger");
const create_answer_dto_1 = require("../../answer/dto/create-answer.dto");
class CreateQuestionDto {
}
__decorate([
    (0, swagger_1.ApiProperty)({ example: 1 }),
    (0, class_transformer_1.Transform)(({ obj, key }) => Number(obj[key])),
    (0, class_validator_1.IsInt)(),
    __metadata("design:type", Number)
], CreateQuestionDto.prototype, "quiz", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Title of question' }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateQuestionDto.prototype, "title", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Just content which is not required' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.MaxLength)(250),
    __metadata("design:type", String)
], CreateQuestionDto.prototype, "content", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, nestjs_form_data_1.IsFile)(),
    (0, nestjs_form_data_1.MaxFileSize)(1e6),
    (0, nestjs_form_data_1.HasMimeType)(['image/jpeg', 'image/png']),
    __metadata("design:type", nestjs_form_data_1.MemoryStoredFile)
], CreateQuestionDto.prototype, "image", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ type: [create_answer_dto_1.CreateAnswerDto] }),
    (0, class_validator_1.IsArray)(),
    (0, class_validator_1.ValidateNested)({ each: true }),
    (0, class_transformer_1.Type)(() => create_answer_dto_1.CreateAnswerDto),
    __metadata("design:type", Array)
], CreateQuestionDto.prototype, "answers", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 1 }),
    (0, class_transformer_1.Transform)(({ obj, key }) => Number(obj[key])),
    (0, class_validator_1.IsInt)(),
    __metadata("design:type", Number)
], CreateQuestionDto.prototype, "order", void 0);
exports.CreateQuestionDto = CreateQuestionDto;
//# sourceMappingURL=create-question.dto.js.map
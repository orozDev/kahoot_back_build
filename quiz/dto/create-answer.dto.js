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
exports.CreateAnswerDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
const class_transformer_1 = require("class-transformer");
const nestjs_form_data_1 = require("nestjs-form-data");
class CreateAnswerDto {
}
__decorate([
    (0, swagger_1.ApiProperty)({ example: "This is a variant of question's answer" }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.MaxLength)(250),
    __metadata("design:type", String)
], CreateAnswerDto.prototype, "value", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsEmpty)(),
    (0, nestjs_form_data_1.IsFile)(),
    (0, nestjs_form_data_1.MaxFileSize)(1e6),
    (0, nestjs_form_data_1.HasMimeType)(['image/jpeg', 'image/png']),
    __metadata("design:type", nestjs_form_data_1.MemoryStoredFile)
], CreateAnswerDto.prototype, "image", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: false }),
    (0, class_validator_1.IsBoolean)(),
    (0, class_transformer_1.Transform)(({ obj, key }) => Boolean(obj[key])),
    __metadata("design:type", Boolean)
], CreateAnswerDto.prototype, "isCorrect", void 0);
exports.CreateAnswerDto = CreateAnswerDto;
//# sourceMappingURL=create-answer.dto.js.map
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
exports.CreateTestingDto = void 0;
const class_validator_1 = require("class-validator");
const class_transformer_1 = require("class-transformer");
const unique_validator_1 = require("../../../validators/unique.validator");
const testing_entity_1 = require("../../entities/testing.entity");
const swagger_1 = require("@nestjs/swagger");
const testing_status_enum_1 = require("../../testing-status.enum");
class CreateTestingDto {
}
__decorate([
    (0, swagger_1.ApiProperty)({ example: 1 }),
    (0, class_validator_1.IsInt)(),
    (0, class_transformer_1.Transform)(({ obj, key }) => Number(obj[key])),
    __metadata("design:type", Number)
], CreateTestingDto.prototype, "quiz", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: '213124' }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.Validate)(unique_validator_1.UniqueValidator, [{ table: testing_entity_1.TestingEntity, column: 'code' }], {
        message: 'Этот код уже занят',
    }),
    __metadata("design:type", String)
], CreateTestingDto.prototype, "code", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        enum: testing_status_enum_1.TestingStatusEnum,
        required: false,
    }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsEnum)(testing_status_enum_1.TestingStatusEnum),
    __metadata("design:type", String)
], CreateTestingDto.prototype, "status", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 1 }),
    (0, class_validator_1.IsInt)(),
    (0, class_transformer_1.Transform)(({ obj, key }) => Number(obj[key])),
    __metadata("design:type", Number)
], CreateTestingDto.prototype, "owner", void 0);
exports.CreateTestingDto = CreateTestingDto;
//# sourceMappingURL=create-testing.dto.js.map
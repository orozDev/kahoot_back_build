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
exports.TestingQueryDto = void 0;
const paginationQueryDto_1 = require("../../../utils/dto/paginationQueryDto");
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
const class_transformer_1 = require("class-transformer");
const testing_status_enum_1 = require("../../testing-status.enum");
class TestingQueryDto extends paginationQueryDto_1.PaginationQueryDto {
}
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'oroz', required: false }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], TestingQueryDto.prototype, "search", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 1, required: false }),
    (0, class_validator_1.IsOptional)(),
    (0, class_transformer_1.Transform)(({ obj, key }) => Number(obj[key])),
    (0, class_validator_1.IsInt)(),
    __metadata("design:type", Number)
], TestingQueryDto.prototype, "quiz", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 1, required: false }),
    (0, class_validator_1.IsOptional)(),
    (0, class_transformer_1.Transform)(({ obj, key }) => Number(obj[key])),
    (0, class_validator_1.IsInt)(),
    __metadata("design:type", Number)
], TestingQueryDto.prototype, "owner", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        enum: testing_status_enum_1.TestingStatusEnum,
        required: false,
        example: testing_status_enum_1.TestingStatusEnum.CREATED,
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsEnum)(testing_status_enum_1.TestingStatusEnum),
    __metadata("design:type", String)
], TestingQueryDto.prototype, "status", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 1, required: false }),
    (0, class_validator_1.IsOptional)(),
    (0, class_transformer_1.Transform)(({ obj, key }) => Number(obj[key])),
    (0, class_validator_1.IsInt)(),
    __metadata("design:type", Number)
], TestingQueryDto.prototype, "participant", void 0);
exports.TestingQueryDto = TestingQueryDto;
//# sourceMappingURL=testing-query.dto.js.map
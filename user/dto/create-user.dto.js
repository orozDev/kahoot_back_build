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
exports.CreateUserDto = void 0;
const class_validator_1 = require("class-validator");
const unique_validator_1 = require("../../validators/unique.validator");
const user_entity_1 = require("../entities/user.entity");
const user_roles_enum_1 = require("../user-roles.enum");
const class_transformer_1 = require("class-transformer");
const swagger_1 = require("@nestjs/swagger");
class CreateUserDto {
}
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'user' }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.Validate)(unique_validator_1.UniqueValidator, [{ table: user_entity_1.UserEntity, column: 'username' }], {
        message: 'Такое имя пользователя уже занято',
    }),
    (0, class_validator_1.MinLength)(2),
    (0, class_validator_1.MaxLength)(50),
    __metadata("design:type", String)
], CreateUserDto.prototype, "username", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: '********' }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsStrongPassword)({
        minLength: 8,
        minLowercase: 0,
        minNumbers: 0,
        minSymbols: 0,
        minUppercase: 0,
    }),
    __metadata("design:type", String)
], CreateUserDto.prototype, "password", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: '+996776780472' }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsPhoneNumber)(undefined),
    (0, class_validator_1.Validate)(unique_validator_1.UniqueValidator, [{ table: user_entity_1.UserEntity, column: 'phone' }], {
        message: 'Пользователь с таким номером телефона уже существует',
    }),
    __metadata("design:type", String)
], CreateUserDto.prototype, "phone", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'oroz@gmail.com' }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsEmail)({}),
    (0, class_validator_1.Validate)(unique_validator_1.UniqueValidator, [{ table: user_entity_1.UserEntity, column: 'email' }], {
        message: 'Пользователь с таким электронной почтой уже существует',
    }),
    __metadata("design:type", String)
], CreateUserDto.prototype, "email", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'oroz' }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.MinLength)(2),
    (0, class_validator_1.MaxLength)(50),
    __metadata("design:type", String)
], CreateUserDto.prototype, "firstName", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'zhenish' }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.MinLength)(2),
    (0, class_validator_1.MaxLength)(50),
    __metadata("design:type", String)
], CreateUserDto.prototype, "lastName", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: true }),
    (0, class_transformer_1.Transform)(({ obj, key }) => Boolean(obj[key])),
    (0, class_validator_1.IsBoolean)(),
    __metadata("design:type", Boolean)
], CreateUserDto.prototype, "isActive", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: user_roles_enum_1.UserRolesEnum.USER, enum: user_roles_enum_1.UserRolesEnum }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsEnum)(user_roles_enum_1.UserRolesEnum),
    __metadata("design:type", String)
], CreateUserDto.prototype, "role", void 0);
exports.CreateUserDto = CreateUserDto;
//# sourceMappingURL=create-user.dto.js.map
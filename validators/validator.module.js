"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ValidatorModule = void 0;
const common_1 = require("@nestjs/common");
const update_unique_validator_1 = require("./update-unique.validator");
const unique_validator_1 = require("./unique.validator");
const is_exist_validator_1 = require("./is-exist.validator");
let ValidatorModule = class ValidatorModule {
};
ValidatorModule = __decorate([
    (0, common_1.Module)({
        providers: [update_unique_validator_1.UpdateUniqueValidator, unique_validator_1.UniqueValidator, is_exist_validator_1.IsExistValidator],
        exports: [update_unique_validator_1.UpdateUniqueValidator, unique_validator_1.UniqueValidator, is_exist_validator_1.IsExistValidator],
    })
], ValidatorModule);
exports.ValidatorModule = ValidatorModule;
//# sourceMappingURL=validator.module.js.map
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.KlassModule = void 0;
const common_1 = require("@nestjs/common");
const klass_service_1 = require("./klass.service");
const klass_controller_1 = require("./klass.controller");
const typeorm_1 = require("@nestjs/typeorm");
const klass_entity_1 = require("./entities/klass.entity");
const auth_module_1 = require("../auth/auth.module");
const utils_module_1 = require("../utils/utils.module");
const school_entity_1 = require("../school/entities/school.entity");
let KlassModule = class KlassModule {
};
KlassModule = __decorate([
    (0, common_1.Module)({
        imports: [
            typeorm_1.TypeOrmModule.forFeature([klass_entity_1.KlassEntity, school_entity_1.SchoolEntity]),
            auth_module_1.AuthModule,
            utils_module_1.UtilsModule,
        ],
        controllers: [klass_controller_1.KlassController],
        providers: [klass_service_1.KlassService],
    })
], KlassModule);
exports.KlassModule = KlassModule;
//# sourceMappingURL=klass.module.js.map
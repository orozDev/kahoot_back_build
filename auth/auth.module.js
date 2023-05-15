"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthModule = void 0;
const common_1 = require("@nestjs/common");
const auth_controller_1 = require("./auth.controller");
const auth_service_1 = require("./auth.service");
const passport_1 = require("@nestjs/passport");
const config_1 = require("@nestjs/config");
const jwt_1 = require("@nestjs/jwt");
const typeorm_1 = require("@nestjs/typeorm");
const user_service_1 = require("../user/services/user.service");
const user_module_1 = require("../user/user.module");
const user_entity_1 = require("../user/entities/user.entity");
const file_module_1 = require("../files/file.module");
const utils_module_1 = require("../utils/utils.module");
const validator_module_1 = require("../validators/validator.module");
const rt_strategy_1 = require("./strategy/rt.strategy");
const jwt_strategy_1 = require("./strategy/jwt.strategy");
const local_strategy_1 = require("./strategy/local.strategy");
let AuthModule = class AuthModule {
};
AuthModule = __decorate([
    (0, common_1.Module)({
        providers: [auth_service_1.AuthService, user_service_1.UserService, local_strategy_1.LocalStrategy, jwt_strategy_1.JwtStrategy, rt_strategy_1.RtStrategy],
        controllers: [auth_controller_1.AuthController],
        imports: [
            passport_1.PassportModule,
            file_module_1.FileModule,
            (0, common_1.forwardRef)(() => user_module_1.UserModule),
            config_1.ConfigModule,
            utils_module_1.UtilsModule,
            validator_module_1.ValidatorModule,
            typeorm_1.TypeOrmModule.forFeature([user_entity_1.UserEntity]),
            jwt_1.JwtModule.registerAsync({
                imports: [config_1.ConfigModule],
                inject: [config_1.ConfigService],
                useFactory: async (config) => ({
                    secret: config.get('ACCESS_SECRET_KEY'),
                }),
            }),
        ],
        exports: [jwt_1.JwtModule, auth_service_1.AuthService, local_strategy_1.LocalStrategy, jwt_strategy_1.JwtStrategy],
    })
], AuthModule);
exports.AuthModule = AuthModule;
//# sourceMappingURL=auth.module.js.map
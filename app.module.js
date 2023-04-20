"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const user_module_1 = require("./user/user.module");
const config_1 = require("@nestjs/config");
const serve_static_1 = require("@nestjs/serve-static");
const typeorm_1 = require("@nestjs/typeorm");
const path_1 = require("path");
const utils_module_1 = require("./utils/utils.module");
const typeorm_options_1 = require("./options/typeorm.options");
const quiz_module_1 = require("./quiz/quiz.module");
const klass_module_1 = require("./klass/klass.module");
const category_module_1 = require("./category/category.module");
const admin_module_1 = require("./admin/admin.module");
const nestjs_form_data_1 = require("nestjs-form-data");
const question_module_1 = require("./question/question.module");
const answer_module_1 = require("./answer/answer.module");
const auth_module_1 = require("./auth/auth.module");
const file_module_1 = require("./files/file.module");
let AppModule = class AppModule {
};
AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            config_1.ConfigModule.forRoot({
                envFilePath: `./.env`,
            }),
            serve_static_1.ServeStaticModule.forRoot({
                rootPath: (0, path_1.join)(__dirname, 'static'),
                serveRoot: '/static',
            }),
            typeorm_1.TypeOrmModule.forRootAsync(typeorm_options_1.typeormOptions),
            nestjs_form_data_1.NestjsFormDataModule,
            auth_module_1.AuthModule,
            file_module_1.FileModule,
            user_module_1.UserModule,
            utils_module_1.UtilsModule,
            question_module_1.QuestionModule,
            quiz_module_1.QuizModule,
            klass_module_1.KlassModule,
            category_module_1.CategoryModule,
            admin_module_1.AdminModule,
            answer_module_1.AnswerModule,
        ],
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map
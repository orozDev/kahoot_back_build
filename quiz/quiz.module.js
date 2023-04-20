"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.QuizModule = void 0;
const common_1 = require("@nestjs/common");
const quiz_service_1 = require("./quiz.service");
const quiz_controller_1 = require("./quiz.controller");
const typeorm_1 = require("@nestjs/typeorm");
const question_entity_1 = require("../question/entities/question.entity");
const nestjs_form_data_1 = require("nestjs-form-data");
const file_module_1 = require("../files/file.module");
const category_entity_1 = require("../category/entities/category.entity");
const klass_entity_1 = require("../klass/entities/klass.entity");
const user_entity_1 = require("../user/entities/user.entity");
const utils_module_1 = require("../utils/utils.module");
const quiz_entity_1 = require("./entities/quiz.entity");
const auth_module_1 = require("../auth/auth.module");
let QuizModule = class QuizModule {
};
QuizModule = __decorate([
    (0, common_1.Module)({
        imports: [
            typeorm_1.TypeOrmModule.forFeature([
                quiz_entity_1.QuizEntity,
                question_entity_1.QuestionEntity,
                category_entity_1.CategoryEntity,
                klass_entity_1.KlassEntity,
                user_entity_1.UserEntity,
            ]),
            nestjs_form_data_1.NestjsFormDataModule,
            file_module_1.FileModule,
            utils_module_1.UtilsModule,
            auth_module_1.AuthModule,
        ],
        controllers: [quiz_controller_1.QuizController],
        providers: [quiz_service_1.QuizService],
    })
], QuizModule);
exports.QuizModule = QuizModule;
//# sourceMappingURL=quiz.module.js.map
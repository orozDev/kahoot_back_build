"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.QuestionModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const question_entity_1 = require("./entities/question.entity");
const nestjs_form_data_1 = require("nestjs-form-data");
const file_module_1 = require("../files/file.module");
const utils_module_1 = require("../utils/utils.module");
const question_service_1 = require("./question.service");
const question_controller_1 = require("./question.controller");
const answer_entity_1 = require("../answer/entities/answer.entity");
const quiz_entity_1 = require("../quiz/entities/quiz.entity");
const quiz_module_1 = require("../quiz/quiz.module");
let QuestionModule = class QuestionModule {
};
QuestionModule = __decorate([
    (0, common_1.Module)({
        imports: [
            typeorm_1.TypeOrmModule.forFeature([quiz_entity_1.QuizEntity, question_entity_1.QuestionEntity, answer_entity_1.AnswerEntity]),
            nestjs_form_data_1.NestjsFormDataModule,
            file_module_1.FileModule,
            utils_module_1.UtilsModule,
            quiz_module_1.QuizModule,
        ],
        controllers: [question_controller_1.QuestionController],
        providers: [question_service_1.QuestionService],
    })
], QuestionModule);
exports.QuestionModule = QuestionModule;
//# sourceMappingURL=question.module.js.map
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
const quiz_entity_1 = require("./entities/quiz.entity");
const question_entity_1 = require("./entities/question.entity");
const answer_entity_1 = require("./entities/answer.entity");
const nestjs_form_data_1 = require("nestjs-form-data");
const file_module_1 = require("../files/file.module");
let QuizModule = class QuizModule {
};
QuizModule = __decorate([
    (0, common_1.Module)({
        imports: [
            typeorm_1.TypeOrmModule.forFeature([quiz_entity_1.QuizEntity, question_entity_1.QuestionEntity, answer_entity_1.AnswerEntity]),
            nestjs_form_data_1.NestjsFormDataModule,
            file_module_1.FileModule,
        ],
        controllers: [quiz_controller_1.QuizController],
        providers: [quiz_service_1.QuizService],
    })
], QuizModule);
exports.QuizModule = QuizModule;
//# sourceMappingURL=quiz.module.js.map
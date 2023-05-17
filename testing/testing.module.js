"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TestingModule = void 0;
const common_1 = require("@nestjs/common");
const testing_service_1 = require("./services/testing.service");
const testing_controller_1 = require("./controllers/testing.controller");
const utils_module_1 = require("../utils/utils.module");
const testing_gateway_1 = require("./testing.gateway");
const typeorm_1 = require("@nestjs/typeorm");
const testing_entity_1 = require("./entities/testing.entity");
const participant_entity_1 = require("./entities/participant.entity");
const selected_answer_entity_1 = require("./entities/selected-answer.entity");
const user_entity_1 = require("../user/entities/user.entity");
const quiz_entity_1 = require("../quiz/entities/quiz.entity");
const participant_controller_1 = require("./controllers/participant.controller");
const participant_service_1 = require("./services/participant.service");
const selected_answer_controller_1 = require("./controllers/selected-answer.controller");
const selected_answer_service_1 = require("./services/selected-answer.service");
const question_entity_1 = require("../quiz/entities/question.entity");
const answer_entity_1 = require("../quiz/entities/answer.entity");
const jwt_1 = require("@nestjs/jwt");
const config_1 = require("@nestjs/config");
let TestingModule = class TestingModule {
};
TestingModule = __decorate([
    (0, common_1.Module)({
        imports: [
            utils_module_1.UtilsModule,
            jwt_1.JwtModule,
            config_1.ConfigModule,
            typeorm_1.TypeOrmModule.forFeature([
                testing_entity_1.TestingEntity,
                participant_entity_1.ParticipantEntity,
                selected_answer_entity_1.SelectedAnswerEntity,
                user_entity_1.UserEntity,
                quiz_entity_1.QuizEntity,
                question_entity_1.QuestionEntity,
                answer_entity_1.AnswerEntity,
            ]),
        ],
        controllers: [
            testing_controller_1.TestingController,
            participant_controller_1.ParticipantController,
            selected_answer_controller_1.SelectedAnswerController,
        ],
        providers: [
            testing_service_1.TestingService,
            testing_gateway_1.TestingGateway,
            participant_service_1.ParticipantService,
            selected_answer_service_1.SelectedAnswerService,
        ],
    })
], TestingModule);
exports.TestingModule = TestingModule;
//# sourceMappingURL=testing.module.js.map
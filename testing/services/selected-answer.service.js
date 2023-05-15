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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SelectedAnswerService = void 0;
const common_1 = require("@nestjs/common");
const utils_service_1 = require("../../utils/utils.service");
const typeorm_1 = require("@nestjs/typeorm");
const selected_answer_entity_1 = require("../entities/selected-answer.entity");
const typeorm_2 = require("typeorm");
const participant_entity_1 = require("../entities/participant.entity");
const question_entity_1 = require("../../quiz/entities/question.entity");
const answer_entity_1 = require("../../quiz/entities/answer.entity");
let SelectedAnswerService = class SelectedAnswerService {
    constructor(utils, selectedAnswerRepository, participantRepository, questionRepository, answerRepository) {
        this.utils = utils;
        this.selectedAnswerRepository = selectedAnswerRepository;
        this.participantRepository = participantRepository;
        this.questionRepository = questionRepository;
        this.answerRepository = answerRepository;
    }
    async create(createSelectedAnswerDto) {
        const { participant, question, answer, point } = createSelectedAnswerDto;
        const selectedAnswer = new selected_answer_entity_1.SelectedAnswerEntity();
        selectedAnswer.participant =
            await this.utils.getObjectOr404(this.participantRepository, { where: { id: participant } });
        selectedAnswer.question = await this.utils.getObjectOr404(this.questionRepository, { where: { id: question } });
        selectedAnswer.answer = await this.utils.getObjectOr404(this.answerRepository, { where: { id: answer } });
        selectedAnswer.point = point;
        return await this.selectedAnswerRepository.save(selectedAnswer);
    }
    async findAll(query) {
        const { participant, answer, question, search, limit, offset } = query;
        const filterQuery = {};
        if (participant) {
            filterQuery['participant'] =
                await this.utils.getObjectOr404(this.participantRepository, { where: { id: participant } });
        }
        if (answer) {
            filterQuery['answer'] = await this.utils.getObjectOr404(this.answerRepository, { where: { id: answer } });
        }
        if (question) {
            filterQuery['participant'] =
                await this.utils.getObjectOr404(this.questionRepository, { where: { id: question } });
        }
        return await this.utils.complexRequest({
            entity: 'selected_answer',
            repository: this.selectedAnswerRepository,
            filterQuery,
            limit,
            offset,
            search,
            searchFields: ['point'],
        });
    }
    async findOne(id) {
        const selectedAnswer = await this.selectedAnswerRepository.findOne({
            where: { id },
            relations: { question: true, participant: true },
        });
        if (!selectedAnswer) {
            throw new common_1.NotFoundException({ mesaage: 'Selected answer not found' });
        }
        return selectedAnswer;
    }
    async update(id, updateSelectedAnswerDto) {
        const { participant, answer, point, question } = updateSelectedAnswerDto;
        const selectedAnswer = await this.selectedAnswerRepository.findOneBy({
            id,
        });
        if (!selectedAnswer) {
            throw new common_1.NotFoundException({ mesaage: 'Selected answer not found' });
        }
        if (participant) {
            selectedAnswer.participant =
                await this.utils.getObjectOr404(this.participantRepository, { where: { id: participant } });
        }
        if (answer) {
            selectedAnswer.answer = await this.utils.getObjectOr404(this.answerRepository, { where: { id: answer } });
        }
        if (question) {
            selectedAnswer.question = await this.utils.getObjectOr404(this.questionRepository, { where: { id: question } });
        }
        if (point)
            selectedAnswer.point = point;
        await this.selectedAnswerRepository.save(selectedAnswer);
        return await this.findOne(id);
    }
    async remove(id) {
        const selectedAnswer = await this.selectedAnswerRepository.findOneBy({
            id,
        });
        if (!selectedAnswer) {
            throw new common_1.NotFoundException({ mesaage: 'Selected answer not found' });
        }
        await selectedAnswer.remove();
    }
};
SelectedAnswerService = __decorate([
    (0, common_1.Injectable)(),
    __param(1, (0, typeorm_1.InjectRepository)(selected_answer_entity_1.SelectedAnswerEntity)),
    __param(2, (0, typeorm_1.InjectRepository)(participant_entity_1.ParticipantEntity)),
    __param(3, (0, typeorm_1.InjectRepository)(question_entity_1.QuestionEntity)),
    __param(4, (0, typeorm_1.InjectRepository)(answer_entity_1.AnswerEntity)),
    __metadata("design:paramtypes", [utils_service_1.UtilsService,
        typeorm_2.Repository,
        typeorm_2.Repository,
        typeorm_2.Repository,
        typeorm_2.Repository])
], SelectedAnswerService);
exports.SelectedAnswerService = SelectedAnswerService;
//# sourceMappingURL=selected-answer.service.js.map
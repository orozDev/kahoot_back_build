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
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.QuestionService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const question_entity_1 = require("./entities/question.entity");
const typeorm_2 = require("typeorm");
const file_service_1 = require("../files/file.service");
const utils_service_1 = require("../utils/utils.service");
const quiz_entity_1 = require("../quiz/entities/quiz.entity");
const answer_entity_1 = require("../answer/entities/answer.entity");
let QuestionService = class QuestionService {
    constructor(fileService, utils, questionRepository, quizRepository, answerRepository) {
        this.fileService = fileService;
        this.utils = utils;
        this.questionRepository = questionRepository;
        this.quizRepository = quizRepository;
        this.answerRepository = answerRepository;
    }
    async create(createQuestionDto) {
        const { image, quiz, answers } = createQuestionDto, rest = __rest(createQuestionDto, ["image", "quiz", "answers"]);
        const temp = { image: null };
        temp['quiz'] = await this.utils.getObjectOr404(this.quizRepository, { where: { id: quiz } });
        if (image) {
            temp['image'] = this.fileService.createFile('image', createQuestionDto.image);
        }
        const question = await this.questionRepository.create(Object.assign(Object.assign({}, rest), temp));
        const savedQuestion = await this.questionRepository.save(question);
        for (const answer of answers) {
            const { image } = answer, answerRest = __rest(answer, ["image"]);
            const answerTemp = { image: null };
            if (image) {
                answerTemp['image'] = this.fileService.createFile('image', answer.image);
            }
            const newAnswer = await this.answerRepository.create(Object.assign(Object.assign(Object.assign({}, answerRest), answerTemp), { question: savedQuestion }));
            await this.answerRepository.save(newAnswer);
        }
        return await this.findOne(savedQuestion.id);
    }
    async findAll(query) {
        const { search, limit, offset, orderBy, order, quiz } = query;
        const temp = {};
        if (quiz)
            temp['quiz'] = { id: +quiz };
        return await this.utils.complexRequest({
            entity: 'question',
            repository: this.questionRepository,
            limit,
            offset,
            search,
            searchFields: ['title', 'content'],
            order: order || 'ASC',
            orderBy: orderBy || 'order',
            filterQuery: temp,
            relations: [{ field: 'answers', entity: 'answer' }],
        });
    }
    async findOne(id) {
        const question = await this.questionRepository.findOne({
            where: { id },
            relations: {
                answers: true,
                quiz: true,
            },
        });
        if (!question) {
            throw new common_1.NotFoundException({ message: 'Question not found' });
        }
        return question;
    }
    async remove(id) {
        const question = await this.questionRepository.findOneBy({ id });
        if (!question) {
            throw new common_1.NotFoundException({ message: 'Question not found' });
        }
        await question.remove();
    }
    async update(id, updateQuestionDto) {
        const question = await this.questionRepository.findOneBy({ id });
        if (!question) {
            throw new common_1.NotFoundException({ message: 'Question not found' });
        }
        const { image, quiz } = updateQuestionDto, rest = __rest(updateQuestionDto, ["image", "quiz"]);
        const temp = {};
        if (quiz) {
            temp['quiz'] = await this.utils.getObjectOr404(this.quizRepository, { where: { id: quiz } });
        }
        if (image) {
            if (question.image)
                this.fileService.removeFile(question.image, false);
            temp['image'] = this.fileService.createFile('image', updateQuestionDto.image);
        }
        await this.questionRepository.update({ id }, Object.assign(Object.assign({}, rest), temp));
        return await this.findOne(id);
    }
};
QuestionService = __decorate([
    (0, common_1.Injectable)(),
    __param(2, (0, typeorm_1.InjectRepository)(question_entity_1.QuestionEntity)),
    __param(3, (0, typeorm_1.InjectRepository)(quiz_entity_1.QuizEntity)),
    __param(4, (0, typeorm_1.InjectRepository)(answer_entity_1.AnswerEntity)),
    __metadata("design:paramtypes", [file_service_1.FileService,
        utils_service_1.UtilsService,
        typeorm_2.Repository,
        typeorm_2.Repository,
        typeorm_2.Repository])
], QuestionService);
exports.QuestionService = QuestionService;
//# sourceMappingURL=question.service.js.map
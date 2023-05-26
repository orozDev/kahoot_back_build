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
exports.AnswerService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const question_entity_1 = require("../entities/question.entity");
const utils_service_1 = require("../../utils/utils.service");
const file_service_1 = require("../../files/file.service");
const answer_entity_1 = require("../entities/answer.entity");
let AnswerService = class AnswerService {
    constructor(answerRepository, questionRepository, utils, fileService) {
        this.answerRepository = answerRepository;
        this.questionRepository = questionRepository;
        this.utils = utils;
        this.fileService = fileService;
    }
    async findAll(query) {
        const { limit, offset, search, question } = query, rest = __rest(query, ["limit", "offset", "search", "question"]);
        const temp = {};
        if (question) {
            temp['question'] = await this.utils.getObjectOr404(this.questionRepository, { where: { id: question } });
        }
        const filterQuery = Object.assign(Object.assign({}, rest), temp);
        return await this.utils.complexRequest({
            entity: 'answer',
            repository: this.answerRepository,
            limit,
            offset,
            search,
            searchFields: ['value'],
            filterQuery,
        });
    }
    async findOne(id) {
        const answer = await this.answerRepository.findOneBy({ id });
        if (!answer)
            throw new common_1.NotFoundException({ message: 'Answer not found' });
        return answer;
    }
    async findOneForGuard(id) {
        const answer = await this.answerRepository.findOne({
            where: { id },
            relations: ['question', 'question.quiz', 'question.quiz.user'],
        });
        if (!answer)
            throw new common_1.NotFoundException({ message: 'Answer not found' });
        return answer;
    }
    async update(id, updateAnswerDto) {
        const answer = await this.answerRepository.findOneBy({ id });
        const { image } = updateAnswerDto, rest = __rest(updateAnswerDto, ["image"]);
        const temp = {};
        if (image) {
            if (answer.image)
                this.fileService.removeFile(answer.image, false);
            temp['image'] = this.fileService.createFile('image', updateAnswerDto.image);
        }
        const updatedAnswer = await this.answerRepository.update({ id }, Object.assign(Object.assign({}, rest), temp));
        console.log(updatedAnswer);
        return await this.findOne(id);
    }
    async remove(id) {
        const answer = await this.findOne(id);
        if (answer.image)
            this.fileService.removeFile(answer.image, false);
        await answer.remove();
    }
};
AnswerService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(answer_entity_1.AnswerEntity)),
    __param(1, (0, typeorm_1.InjectRepository)(question_entity_1.QuestionEntity)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        typeorm_2.Repository,
        utils_service_1.UtilsService,
        file_service_1.FileService])
], AnswerService);
exports.AnswerService = AnswerService;
//# sourceMappingURL=answer.service.js.map
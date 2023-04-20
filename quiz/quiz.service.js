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
exports.QuizService = void 0;
const common_1 = require("@nestjs/common");
const file_service_1 = require("../files/file.service");
const typeorm_1 = require("@nestjs/typeorm");
const quiz_entity_1 = require("./entities/quiz.entity");
const typeorm_2 = require("typeorm");
const category_entity_1 = require("../category/entities/category.entity");
const klass_entity_1 = require("../klass/entities/klass.entity");
const user_entity_1 = require("../user/entities/user.entity");
const utils_service_1 = require("../utils/utils.service");
let QuizService = class QuizService {
    constructor(fileService, utils, quizRepository, categoryRepository, klassRepository, userRepository) {
        this.fileService = fileService;
        this.utils = utils;
        this.quizRepository = quizRepository;
        this.categoryRepository = categoryRepository;
        this.klassRepository = klassRepository;
        this.userRepository = userRepository;
    }
    async create(dto) {
        const { image, categories, klasses, user } = dto, rest = __rest(dto, ["image", "categories", "klasses", "user"]);
        const temp = { image: null };
        temp['categories'] = await this.categoryRepository.findBy({
            id: (0, typeorm_2.In)(categories),
        });
        temp['klasses'] = await this.klassRepository.findBy({ id: (0, typeorm_2.In)(klasses) });
        temp['user'] = await this.utils.getObjectOr404(this.userRepository, { where: { id: user } });
        if (image) {
            temp['image'] = this.fileService.createFile('image', dto.image);
        }
        const quiz = this.quizRepository.create(Object.assign(Object.assign({}, rest), temp));
        return await this.quizRepository.save(quiz);
    }
    async findAll(query) {
        const { klass, category, user, search, limit, offset } = query, rest = __rest(query, ["klass", "category", "user", "search", "limit", "offset"]);
        const temp = {};
        const relationFilterQuery = [];
        if (user)
            temp['user'] = { id: +user };
        if (category) {
            relationFilterQuery.push({
                query: 'category.id = :id',
                value: { id: category },
            });
        }
        if (klass) {
            relationFilterQuery.push({
                query: 'klass.id = :id',
                value: { id: klass },
            });
        }
        const filterQuery = Object.assign(Object.assign({}, rest), temp);
        return await this.utils.complexRequest({
            entity: 'quiz',
            repository: this.quizRepository,
            filterQuery,
            search,
            searchFields: ['title', 'description'],
            offset,
            limit,
            relationFilterQuery,
        });
    }
    async findOne(id) {
        const quiz = await this.quizRepository.findOne({ where: { id } });
        if (!quiz)
            throw new common_1.NotFoundException({ message: 'Quiz not found' });
        return quiz;
    }
    async update(id, updateQuizDto) {
        const quiz = await this.quizRepository.findOneBy({ id });
        if (!quiz)
            throw new common_1.NotFoundException({ message: 'Quiz not found' });
        const { image, categories, klasses, user } = updateQuizDto, rest = __rest(updateQuizDto, ["image", "categories", "klasses", "user"]);
        const temp = { image: null };
        if (categories) {
            quiz.categories = await this.categoryRepository.findBy({
                id: (0, typeorm_2.In)(categories),
            });
        }
        if (klasses) {
            quiz.klasses = await this.klassRepository.findBy({ id: (0, typeorm_2.In)(klasses) });
        }
        if (user) {
            quiz.user = await this.utils.getObjectOr404(this.userRepository, { where: { id: user } });
        }
        if (image) {
            if (quiz.image)
                this.fileService.removeFile(quiz.image);
            temp['image'] = this.fileService.createFile('image', updateQuizDto.image);
        }
        await this.quizRepository.save(Object.assign(Object.assign(Object.assign({}, quiz), temp), rest));
        return await this.findOne(id);
    }
    async remove(id) {
        const quiz = await this.quizRepository.findOneBy({ id });
        if (!quiz)
            throw new common_1.NotFoundException({ message: 'Quiz not found' });
        await quiz.remove();
    }
};
QuizService = __decorate([
    (0, common_1.Injectable)(),
    __param(2, (0, typeorm_1.InjectRepository)(quiz_entity_1.QuizEntity)),
    __param(3, (0, typeorm_1.InjectRepository)(category_entity_1.CategoryEntity)),
    __param(4, (0, typeorm_1.InjectRepository)(klass_entity_1.KlassEntity)),
    __param(5, (0, typeorm_1.InjectRepository)(user_entity_1.UserEntity)),
    __metadata("design:paramtypes", [file_service_1.FileService,
        utils_service_1.UtilsService,
        typeorm_2.Repository,
        typeorm_2.Repository,
        typeorm_2.Repository,
        typeorm_2.Repository])
], QuizService);
exports.QuizService = QuizService;
//# sourceMappingURL=quiz.service.js.map
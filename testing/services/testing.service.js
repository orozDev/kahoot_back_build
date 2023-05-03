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
exports.TestingService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const testing_entity_1 = require("../entities/testing.entity");
const typeorm_2 = require("typeorm");
const utils_service_1 = require("../../utils/utils.service");
const quiz_entity_1 = require("../../quiz/entities/quiz.entity");
const user_entity_1 = require("../../user/entities/user.entity");
const participant_entity_1 = require("../entities/participant.entity");
let TestingService = class TestingService {
    constructor(testingRepository, quizRepository, userRepository, participantRepository, utils) {
        this.testingRepository = testingRepository;
        this.quizRepository = quizRepository;
        this.userRepository = userRepository;
        this.participantRepository = participantRepository;
        this.utils = utils;
    }
    async create(createTestingDto) {
        const { quiz, owner } = createTestingDto, rest = __rest(createTestingDto, ["quiz", "owner"]);
        const temp = {};
        temp['quiz'] = await this.utils.getObjectOr404(this.quizRepository, { where: { id: quiz } });
        temp['owner'] = await this.utils.getObjectOr404(this.userRepository, { where: { id: owner } });
        const testing = this.testingRepository.create(Object.assign(Object.assign({}, rest), temp));
        return await this.testingRepository.save(testing);
    }
    async findAll(query) {
        const { limit, offset, search, quiz, owner, participant } = query, rest = __rest(query, ["limit", "offset", "search", "quiz", "owner", "participant"]);
        const temp = {};
        const relationFilterQuery = [];
        if (quiz) {
            temp['quiz'] = await this.utils.getObjectOr404(this.quizRepository, { where: { id: quiz } });
        }
        if (owner) {
            temp['owner'] = await this.utils.getObjectOr404(this.userRepository, { where: { id: owner } });
        }
        if (participant) {
            relationFilterQuery.push({
                query: 'participant.id = :id',
                value: { id: participant },
            });
        }
        return await this.utils.complexRequest({
            entity: 'testing',
            repository: this.testingRepository,
            filterQuery: Object.assign(Object.assign({}, rest), temp),
            limit,
            offset,
            search,
            searchFields: ['code'],
            relations: [{ field: 'owner', entity: 'user' }],
            relationFilterQuery,
        });
    }
    async findOne(id) {
        const testing = await this.testingRepository.findOne({
            where: { id },
            relations: ['participants', 'owner'],
        });
        if (!testing)
            throw new common_1.NotFoundException({ message: 'Testing not found' });
        return testing;
    }
    async update(id, updateTestingDto) {
        const testing = await this.testingRepository.findOneBy({ id });
        if (!testing)
            throw new common_1.NotFoundException({ message: 'Testing not found' });
        const { quiz, owner } = updateTestingDto, rest = __rest(updateTestingDto, ["quiz", "owner"]);
        if (quiz) {
            testing.quiz = await this.utils.getObjectOr404(this.quizRepository, {
                where: { id },
            });
        }
        if (owner) {
            testing.owner = await this.utils.getObjectOr404(this.userRepository, { where: { id } });
        }
        await this.testingRepository.save(Object.assign(Object.assign({}, testing), rest));
        return await this.findOne(id);
    }
    async remove(id) {
        const testing = await this.testingRepository.findOneBy({ id });
        if (!testing)
            throw new common_1.NotFoundException({ message: 'Testing not found' });
        await testing.remove();
    }
};
TestingService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(testing_entity_1.TestingEntity)),
    __param(1, (0, typeorm_1.InjectRepository)(quiz_entity_1.QuizEntity)),
    __param(2, (0, typeorm_1.InjectRepository)(user_entity_1.UserEntity)),
    __param(3, (0, typeorm_1.InjectRepository)(participant_entity_1.ParticipantEntity)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        typeorm_2.Repository,
        typeorm_2.Repository,
        typeorm_2.Repository,
        utils_service_1.UtilsService])
], TestingService);
exports.TestingService = TestingService;
//# sourceMappingURL=testing.service.js.map
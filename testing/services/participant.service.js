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
exports.ParticipantService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const participant_entity_1 = require("../entities/participant.entity");
const user_entity_1 = require("../../user/entities/user.entity");
const typeorm_2 = require("typeorm");
const testing_entity_1 = require("../entities/testing.entity");
const utils_service_1 = require("../../utils/utils.service");
const testing_gateway_1 = require("../testing.gateway");
const testing_status_enum_1 = require("../enum/testing-status.enum");
let ParticipantService = class ParticipantService {
    constructor(participantRepository, userRepository, testingRepository, utils, testingGateway) {
        this.participantRepository = participantRepository;
        this.userRepository = userRepository;
        this.testingRepository = testingRepository;
        this.utils = utils;
        this.testingGateway = testingGateway;
    }
    async create(createParticipantDto) {
        const { user, testing, name } = createParticipantDto;
        const participant = new participant_entity_1.ParticipantEntity();
        const testingObject = await this.utils.getObjectOr404(this.testingRepository, { where: { id: testing } });
        if (testingObject.status !== testing_status_enum_1.TestingStatusEnum.PENDING) {
            throw new common_1.BadRequestException({
                message: 'Testing status should be pending',
            });
        }
        participant.testing = testingObject;
        if (user) {
            participant.user = await this.utils.getObjectOr404(this.userRepository, { where: { id: user } });
        }
        participant.name = name;
        this.testingGateway.addNewParticipantToRoom(participant);
        return await this.participantRepository.save(participant);
    }
    async findAll(query) {
        const { testing, user, search, limit, offset } = query;
        const filterQuery = {};
        if (testing) {
            filterQuery['testing'] = await this.utils.getObjectOr404(this.testingRepository, { where: { id: testing } });
        }
        if (user) {
            filterQuery['user'] = await this.utils.getObjectOr404(this.userRepository, { where: { id: user } });
        }
        return await this.utils.complexRequest({
            entity: 'participant',
            repository: this.participantRepository,
            relations: [{ field: 'user', entity: 'user' }],
            search,
            searchFields: ['name'],
            filterQuery,
            limit,
            offset,
        });
    }
    async findOne(id) {
        const participant = await this.participantRepository.findOne({
            where: { id },
            relations: { user: true, testing: true, selectedAnswers: true },
        });
        if (!participant) {
            throw new common_1.NotFoundException({ message: 'Participant not found' });
        }
        return participant;
    }
    async update(id, updateParticipantDto) {
        const participant = await this.participantRepository.findOneBy({ id });
        if (!participant) {
            throw new common_1.NotFoundException({ message: 'Participant not found' });
        }
        const { user, testing, name } = updateParticipantDto;
        if (user) {
            participant.user = await this.utils.getObjectOr404(this.userRepository, { where: { id: user } });
        }
        if (testing) {
            participant.testing = await this.utils.getObjectOr404(this.testingRepository, { where: { id: testing } });
        }
        if (name) {
            participant.name = name;
        }
        await this.participantRepository.save(participant);
        console.log(participant);
        this.testingGateway.updateParticipantToRoom(await this.findOne(id));
        return await this.findOne(id);
    }
    async remove(id) {
        const participant = await this.participantRepository.findOneBy({ id });
        if (!participant) {
            throw new common_1.NotFoundException({ message: 'Participant not found' });
        }
        await participant.remove();
        this.testingGateway.removeParticipantToRoom(id, participant.testingId);
    }
};
ParticipantService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(participant_entity_1.ParticipantEntity)),
    __param(1, (0, typeorm_1.InjectRepository)(user_entity_1.UserEntity)),
    __param(2, (0, typeorm_1.InjectRepository)(testing_entity_1.TestingEntity)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        typeorm_2.Repository,
        typeorm_2.Repository,
        utils_service_1.UtilsService,
        testing_gateway_1.TestingGateway])
], ParticipantService);
exports.ParticipantService = ParticipantService;
//# sourceMappingURL=participant.service.js.map
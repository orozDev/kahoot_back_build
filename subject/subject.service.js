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
exports.SubjectService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const subject_entity_1 = require("./entities/subject.entity");
const typeorm_2 = require("typeorm");
const utils_service_1 = require("../utils/utils.service");
let SubjectService = class SubjectService {
    constructor(subjectRepository, utils) {
        this.subjectRepository = subjectRepository;
        this.utils = utils;
    }
    async create(createSubjectDto) {
        const subject = this.subjectRepository.create(createSubjectDto);
        return await this.subjectRepository.save(subject);
    }
    async findAll(query) {
        return await this.utils.complexRequest(Object.assign({ entity: 'subject', repository: this.subjectRepository }, query));
    }
    async findOne(id) {
        const subject = await this.subjectRepository.findOneBy({ id });
        if (!subject)
            throw new common_1.NotFoundException({ message: 'Subject not found' });
        return subject;
    }
    async update(id, updateSubjectDto) {
        await this.subjectRepository.update({ id }, updateSubjectDto);
        return await this.findOne(id);
    }
    async remove(id) {
        const subject = await this.findOne(id);
        await subject.remove();
    }
};
SubjectService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(subject_entity_1.SubjectEntity)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        utils_service_1.UtilsService])
], SubjectService);
exports.SubjectService = SubjectService;
//# sourceMappingURL=subject.service.js.map
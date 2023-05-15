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
exports.KlassService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const klass_entity_1 = require("./entities/klass.entity");
const typeorm_2 = require("typeorm");
const utils_service_1 = require("../utils/utils.service");
const school_entity_1 = require("../school/entities/school.entity");
let KlassService = class KlassService {
    constructor(klassRepository, schoolRepository, utils) {
        this.klassRepository = klassRepository;
        this.schoolRepository = schoolRepository;
        this.utils = utils;
    }
    async validateCreation(dto) {
        const { title, school } = dto;
        const klass = await this.klassRepository.findOne({
            where: { title, school: { id: school } },
            relations: { school: true },
        });
        if (klass) {
            throw new common_1.BadRequestException({
                title: ['This title is already exist'],
            });
        }
        return true;
    }
    async validateUpdating(dto, id) {
        const { title, school } = dto;
        if (title && school) {
            const klass = await this.klassRepository.findOne({
                where: { title, school: { id: school } },
                relations: { school: true },
            });
            if (klass && klass.id !== id) {
                throw new common_1.BadRequestException({
                    title: ['This title is already exist'],
                });
            }
        }
        return true;
    }
    async create(createKlassDto) {
        await this.validateCreation(createKlassDto);
        const { school, title } = createKlassDto;
        const klass = new klass_entity_1.KlassEntity();
        klass.title = title;
        klass.school = await this.utils.getObjectOr404(this.schoolRepository, {
            where: { id: school },
        });
        return await this.klassRepository.save(klass);
    }
    async findAll(query) {
        const { school, search, limit, offset } = query;
        const filterQuery = {};
        if (school) {
            filterQuery['school'] = await this.utils.getObjectOr404(this.schoolRepository, { where: { id: school } });
        }
        return await this.utils.complexRequest({
            entity: 'klass',
            repository: this.klassRepository,
            limit,
            offset,
            search,
            searchFields: ['title'],
            filterQuery,
            relations: [{ field: 'school', entity: 'school' }],
        });
    }
    async findOne(id) {
        const klass = await this.klassRepository.findOne({
            where: { id },
            relations: { school: true },
        });
        if (!klass)
            throw new common_1.NotFoundException({ message: 'Klass not found' });
        return klass;
    }
    async update(id, updateKlassDto) {
        await this.validateUpdating(updateKlassDto, id);
        const { school } = updateKlassDto, rest = __rest(updateKlassDto, ["school"]);
        const temp = {};
        if (school) {
            temp['school'] = await this.utils.getObjectOr404(this.schoolRepository, { where: { id: school } });
        }
        await this.klassRepository.update({ id }, Object.assign(Object.assign({}, rest), temp));
        return await this.findOne(id);
    }
    async remove(id) {
        const klass = await this.findOne(id);
        await klass.remove();
    }
};
KlassService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(klass_entity_1.KlassEntity)),
    __param(1, (0, typeorm_1.InjectRepository)(school_entity_1.SchoolEntity)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        typeorm_2.Repository,
        utils_service_1.UtilsService])
], KlassService);
exports.KlassService = KlassService;
//# sourceMappingURL=klass.service.js.map
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
exports.CityService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const city_entity_1 = require("./entities/city.entity");
const typeorm_2 = require("typeorm");
const utils_service_1 = require("../utils/utils.service");
let CityService = class CityService {
    constructor(cityRepository, utils) {
        this.cityRepository = cityRepository;
        this.utils = utils;
    }
    async create(createCityDto) {
        const city = this.cityRepository.create(createCityDto);
        return await this.cityRepository.save(city);
    }
    async findAll(query) {
        return await this.utils.complexRequest(Object.assign({ entity: 'city', repository: this.cityRepository }, query));
    }
    async findOne(id) {
        const city = await this.cityRepository.findOneBy({ id });
        if (!city)
            throw new common_1.NotFoundException({ message: 'City not found' });
        return city;
    }
    async update(id, updateCityDto) {
        await this.cityRepository.update({ id }, updateCityDto);
        return await this.findOne(id);
    }
    async remove(id) {
        const city = await this.findOne(id);
        await city.remove();
    }
};
CityService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(city_entity_1.CityEntity)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        utils_service_1.UtilsService])
], CityService);
exports.CityService = CityService;
//# sourceMappingURL=city.service.js.map
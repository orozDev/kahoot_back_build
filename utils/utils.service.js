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
Object.defineProperty(exports, "__esModule", { value: true });
exports.UtilsService = void 0;
const common_1 = require("@nestjs/common");
const config_1 = require("@nestjs/config");
let UtilsService = class UtilsService {
    constructor(config) {
        this.config = config;
    }
    includesUrl(data, fields) {
        const staticUrlPrefix = this.config.get('STATIC_URL_PREFIX');
        return data.map((item) => {
            fields.forEach((field) => {
                if (item[field])
                    item[field] = staticUrlPrefix + item[field];
            });
            return item;
        });
    }
    includeUrl(data, fields) {
        const staticUrlPrefix = this.config.get('STATIC_URL_PREFIX');
        fields.forEach((field) => {
            if (data[field])
                data[field] = staticUrlPrefix + data[field];
        });
        return data;
    }
    paginate(queryBuilder, limit = 20, offset = 1) {
        const take = limit || 20;
        const page = offset || 1;
        const skip = (page - 1) * take;
        return queryBuilder.take(take).skip(skip);
    }
    search(queryBuilder, fields, value) {
        for (const field of fields) {
            queryBuilder.orWhere(`(user.${field} LIKE :search)`, {
                search: `%${value}%`,
            });
        }
        return queryBuilder;
    }
    async complexRequest(options) {
        var _a;
        const queryBuilder = await options.repository.createQueryBuilder(options.entity);
        if (options.relations) {
            for (const relation of options.relations) {
                queryBuilder.leftJoinAndSelect(`${options.entity}.${relation.field}`, relation.entity);
            }
        }
        if (options.relationFilterQuery) {
            for (const relation of options.relationFilterQuery) {
                queryBuilder.where(relation.query, relation.value);
            }
        }
        if (options.search) {
            console.log(options.search, options.searchFields);
            for (const field of options.searchFields) {
                queryBuilder.orWhere(`(user.${field} LIKE :search)`, {
                    search: `%${options.search}%`,
                });
            }
        }
        queryBuilder.where(options.filterQuery || {});
        let take = 0;
        let page = 0;
        if (options.limit) {
            take = options.limit;
            page = options.offset || 1;
            const skip = (page - 1) * take;
            queryBuilder.take(take).skip(skip);
        }
        const orderBy = options.orderBy || 'id';
        queryBuilder.orderBy(options.entity + '.' + orderBy, options.order || 'DESC');
        const totalCount = await queryBuilder.getCount();
        const results = await queryBuilder.getMany();
        return {
            totalCount,
            offset: page,
            limit: take,
            totalPages: (_a = Math.ceil(totalCount / take)) !== null && _a !== void 0 ? _a : 0,
            data: this.includesUrl(results, options.includeStaticPrefix || []),
        };
    }
    async getObjectOr404(repository, options) {
        const object = await repository.findOne(options);
        if (!object)
            throw new common_1.NotFoundException({ message: 'not found' });
        return object;
    }
};
UtilsService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [config_1.ConfigService])
], UtilsService);
exports.UtilsService = UtilsService;
//# sourceMappingURL=utils.service.js.map
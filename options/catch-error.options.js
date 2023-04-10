"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.QueryErrorFilter = void 0;
const common_1 = require("@nestjs/common");
const core_1 = require("@nestjs/core");
const typeorm_1 = require("typeorm");
const validation_exception_1 = require("../exceptions/validation.exception");
let QueryErrorFilter = class QueryErrorFilter extends core_1.BaseExceptionFilter {
    catch(exception, host) {
        const { detail = null } = exception || {};
        if (!detail ||
            typeof detail !== 'string' ||
            !detail.includes('already exists')) {
            return super.catch(exception, host);
        }
        const extractMessageRegex = /\((.*?)(?:(?:\)=\()(?!.*(\))(?!.*\))=\()(.*?)\)(?!.*\)))(?!.*(?:\)=\()(?!.*\)=\()((.*?)\))(?!.*\)))/;
        const messageStart = `${exception.table.split('_').join(' ')}`;
        const exceptionDetail = exception.detail.length <= 200
            ? exception.detail.replace(extractMessageRegex, 'with $1: "$3"')
            : exception.detail;
        super.catch(new validation_exception_1.ValidationException({
            [exceptionDetail.split(' ')[2]]: [
                exceptionDetail.replace('Key', messageStart),
            ],
        }), host);
    }
};
QueryErrorFilter = __decorate([
    (0, common_1.Catch)(typeorm_1.QueryFailedError)
], QueryErrorFilter);
exports.QueryErrorFilter = QueryErrorFilter;
//# sourceMappingURL=catch-error.options.js.map
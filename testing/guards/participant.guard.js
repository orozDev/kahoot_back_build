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
exports.ParticipantGuard = void 0;
const common_1 = require("@nestjs/common");
const participant_service_1 = require("../services/participant.service");
const user_roles_enum_1 = require("../../user/enum/user-roles.enum");
const jwt_1 = require("@nestjs/jwt");
const config_1 = require("@nestjs/config");
const abstract_jwt_auth_guard_1 = require("./abstract-jwt-auth.guard");
let ParticipantGuard = class ParticipantGuard extends abstract_jwt_auth_guard_1.AbstractJwtAuthGuard {
    constructor(participantService, jwtService, config) {
        super();
        this.participantService = participantService;
        this.jwtService = jwtService;
        this.config = config;
    }
    async canActivate(context) {
        const request = context.switchToHttp().getRequest();
        const user = this.decodeUser(request, this.jwtService, this.config.get('ACCESS_SECRET_KEY'));
        const participantId = +request._parsedUrl.pathname.split('/').at(-1);
        const participant = await this.participantService.findOne(participantId);
        if (participant.user &&
            (user === null || user === void 0 ? void 0 : user.sub) !== participant.user.id &&
            (user === null || user === void 0 ? void 0 : user.role) !== user_roles_enum_1.UserRolesEnum.ADMIN) {
            throw new common_1.ForbiddenException({
                message: 'User is not owner of this participant',
            });
        }
        return true;
    }
};
ParticipantGuard = __decorate([
    __param(0, (0, common_1.Inject)(participant_service_1.ParticipantService)),
    __metadata("design:paramtypes", [participant_service_1.ParticipantService,
        jwt_1.JwtService,
        config_1.ConfigService])
], ParticipantGuard);
exports.ParticipantGuard = ParticipantGuard;
//# sourceMappingURL=participant.guard.js.map
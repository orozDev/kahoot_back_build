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
exports.ParticipantController = void 0;
const common_1 = require("@nestjs/common");
const participant_service_1 = require("../services/participant.service");
const create_participant_dto_1 = require("../dto/participant/create-participant.dto");
const participant_query_dto_1 = require("../dto/participant/participant-query.dto");
const update_participant_dto_1 = require("../dto/participant/update-participant.dto");
const swagger_1 = require("@nestjs/swagger");
const participant_guard_1 = require("../guards/participant.guard");
let ParticipantController = class ParticipantController {
    constructor(participantService) {
        this.participantService = participantService;
    }
    create(createParticipantDto) {
        return this.participantService.create(createParticipantDto);
    }
    findAll(query) {
        return this.participantService.findAll(query);
    }
    findOne(id) {
        return this.participantService.findOne(+id);
    }
    update(id, updateParticipantDto) {
        return this.participantService.update(+id, updateParticipantDto);
    }
    remove(id) {
        return this.participantService.remove(+id);
    }
};
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_participant_dto_1.CreateParticipantDto]),
    __metadata("design:returntype", void 0)
], ParticipantController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [participant_query_dto_1.ParticipantQueryDto]),
    __metadata("design:returntype", void 0)
], ParticipantController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], ParticipantController.prototype, "findOne", null);
__decorate([
    (0, swagger_1.ApiBearerAuth)(),
    (0, common_1.UseGuards)(participant_guard_1.ParticipantGuard),
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_participant_dto_1.UpdateParticipantDto]),
    __metadata("design:returntype", void 0)
], ParticipantController.prototype, "update", null);
__decorate([
    (0, swagger_1.ApiBearerAuth)(),
    (0, common_1.UseGuards)(participant_guard_1.ParticipantGuard),
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], ParticipantController.prototype, "remove", null);
ParticipantController = __decorate([
    (0, swagger_1.ApiTags)('Participant'),
    (0, common_1.Controller)('/participants'),
    __metadata("design:paramtypes", [participant_service_1.ParticipantService])
], ParticipantController);
exports.ParticipantController = ParticipantController;
//# sourceMappingURL=participant.controller.js.map
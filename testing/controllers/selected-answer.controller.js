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
exports.SelectedAnswerController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const selected_answer_service_1 = require("../services/selected-answer.service");
const create_selected_answer_dto_1 = require("../dto/selected-answer/create-selected-answer.dto");
const selected_query_dto_1 = require("../dto/selected-answer/selected-query.dto");
const update_selected_answer_dto_1 = require("../dto/selected-answer/update-selected-answer.dto");
const selected_answer_guard_1 = require("../guards/selected-answer.guard");
let SelectedAnswerController = class SelectedAnswerController {
    constructor(selectedAnswerService) {
        this.selectedAnswerService = selectedAnswerService;
    }
    create(createSelectedAnswerDto) {
        return this.selectedAnswerService.create(createSelectedAnswerDto);
    }
    findAll(query) {
        return this.selectedAnswerService.findAll(query);
    }
    findOne(id) {
        return this.selectedAnswerService.findOne(+id);
    }
    update(id, updateSelectedAnswerDto) {
        return this.selectedAnswerService.update(+id, updateSelectedAnswerDto);
    }
    remove(id) {
        return this.selectedAnswerService.remove(+id);
    }
};
__decorate([
    (0, swagger_1.ApiBearerAuth)(),
    (0, common_1.UseGuards)(selected_answer_guard_1.SelectedAnswerGuard),
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_selected_answer_dto_1.CreateSelectedAnswerDto]),
    __metadata("design:returntype", void 0)
], SelectedAnswerController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [selected_query_dto_1.SelectedQueryDto]),
    __metadata("design:returntype", void 0)
], SelectedAnswerController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], SelectedAnswerController.prototype, "findOne", null);
__decorate([
    (0, swagger_1.ApiBearerAuth)(),
    (0, common_1.UseGuards)(selected_answer_guard_1.SelectedAnswerGuard),
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_selected_answer_dto_1.UpdateSelectedAnswerDto]),
    __metadata("design:returntype", void 0)
], SelectedAnswerController.prototype, "update", null);
__decorate([
    (0, swagger_1.ApiBearerAuth)(),
    (0, common_1.UseGuards)(selected_answer_guard_1.SelectedAnswerGuard),
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], SelectedAnswerController.prototype, "remove", null);
SelectedAnswerController = __decorate([
    (0, swagger_1.ApiTags)('Selected Answer'),
    (0, common_1.Controller)('/selected-answers'),
    __metadata("design:paramtypes", [selected_answer_service_1.SelectedAnswerService])
], SelectedAnswerController);
exports.SelectedAnswerController = SelectedAnswerController;
//# sourceMappingURL=selected-answer.controller.js.map
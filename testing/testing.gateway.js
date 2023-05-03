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
exports.TestingGateway = void 0;
const websockets_1 = require("@nestjs/websockets");
const socket_io_1 = require("socket.io");
const common_1 = require("@nestjs/common");
let TestingGateway = class TestingGateway {
    constructor() {
        this.logger = new common_1.Logger('TestingGateway');
    }
    handleConnection(client, ...args) {
        this.logger.log(`The client ${client.id} is connected`);
    }
    afterInit(server) {
        this.logger.log('TestingGateway is initialized');
    }
    handleDisconnect(client) {
        this.logger.log(`The client ${client.id} is disconnected`);
    }
    addNewParticipantToRoom(participant) {
        console.log(`addNewParticipantToRoom_${participant.testing.id}`);
        this.server.emit(`addNewParticipantToRoom_${participant.testing.id}`, participant);
    }
    removeParticipantToRoom(participantId, testingId) {
        console.log(participantId);
        this.server.emit(`removeParticipantToRoom_${testingId}`, participantId);
    }
    updateParticipantToRoom(participant) {
        this.server.emit(`updateParticipantToRoom_${participant.testing.id}`, participant);
    }
};
__decorate([
    (0, websockets_1.WebSocketServer)(),
    __metadata("design:type", socket_io_1.Server)
], TestingGateway.prototype, "server", void 0);
TestingGateway = __decorate([
    (0, websockets_1.WebSocketGateway)({ cors: { origin: true } })
], TestingGateway);
exports.TestingGateway = TestingGateway;
//# sourceMappingURL=testing.gateway.js.map
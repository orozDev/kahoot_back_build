import { OnGatewayConnection, OnGatewayDisconnect, OnGatewayInit } from '@nestjs/websockets';
import { Server } from 'socket.io';
import { Logger } from '@nestjs/common';
import { ParticipantEntity } from './entities/participant.entity';
export declare class TestingGateway implements OnGatewayInit, OnGatewayConnection, OnGatewayDisconnect {
    logger: Logger;
    server: Server;
    handleConnection(client: any, ...args: any[]): void;
    afterInit(server: Server): void;
    handleDisconnect(client: any): void;
    addNewParticipantToRoom(participant: ParticipantEntity): void;
    removeParticipantToRoom(participantId: number, testingId: number): void;
    updateParticipantToRoom(participant: ParticipantEntity): void;
}

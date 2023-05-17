import { CanActivate, ExecutionContext } from '@nestjs/common';
import { ParticipantService } from '../services/participant.service';
import { JwtService } from '@nestjs/jwt';
import { ConfigService } from '@nestjs/config';
import { AbstractJwtAuthGuard } from './abstract-jwt-auth.guard';
export declare class ParticipantGuard extends AbstractJwtAuthGuard implements CanActivate {
    private readonly participantService;
    private readonly jwtService;
    private readonly config;
    constructor(participantService: ParticipantService, jwtService: JwtService, config: ConfigService);
    canActivate(context: ExecutionContext): Promise<boolean>;
}

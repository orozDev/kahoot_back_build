import { CanActivate, ExecutionContext } from '@nestjs/common';
import { SelectedAnswerService } from '../services/selected-answer.service';
import { AbstractJwtAuthGuard } from './abstract-jwt-auth.guard';
import { JwtService } from '@nestjs/jwt';
import { ConfigService } from '@nestjs/config';
export declare class SelectedAnswerGuard extends AbstractJwtAuthGuard implements CanActivate {
    private readonly selectedAnswerService;
    private readonly jwtService;
    private readonly config;
    constructor(selectedAnswerService: SelectedAnswerService, jwtService: JwtService, config: ConfigService);
    canActivate(context: ExecutionContext): Promise<boolean>;
}

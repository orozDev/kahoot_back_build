import { ExecutionContext } from '@nestjs/common';
import { JwtAuthGuard } from '../../auth/guards/jwt-auth.guard';
import { ParticipantService } from '../services/participant.service';
export declare class ParticipantGuard extends JwtAuthGuard {
    private readonly participantService;
    constructor(participantService: ParticipantService);
    canActivate(context: ExecutionContext): Promise<boolean>;
}

import { ExecutionContext } from '@nestjs/common';
import { JwtAuthGuard } from '../../auth/guards/jwt-auth.guard';
import { SelectedAnswerService } from '../services/selected-answer.service';
export declare class SelectedAnswerGuard extends JwtAuthGuard {
    private readonly selectedAnswerService;
    constructor(selectedAnswerService: SelectedAnswerService);
    canActivate(context: ExecutionContext): Promise<boolean>;
}

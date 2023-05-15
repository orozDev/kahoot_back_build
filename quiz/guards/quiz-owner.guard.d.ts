import { ExecutionContext } from '@nestjs/common';
import { QuizService } from '../services/quiz.service';
import { JwtAuthGuard } from '../../auth/guards/jwt-auth.guard';
export declare class QuizOwnerGuard extends JwtAuthGuard {
    private readonly quizService;
    constructor(quizService: QuizService);
    canActivate(context: ExecutionContext): Promise<any>;
}

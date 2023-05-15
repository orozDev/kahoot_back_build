import { ExecutionContext } from '@nestjs/common';
import { JwtAuthGuard } from '../../auth/guards/jwt-auth.guard';
import { QuestionService } from '../services/question.service';
export declare class QuestionOwnerGuard extends JwtAuthGuard {
    private readonly questionService;
    constructor(questionService: QuestionService);
    canActivate(context: ExecutionContext): Promise<any>;
}

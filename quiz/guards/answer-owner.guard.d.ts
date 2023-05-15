import { ExecutionContext } from '@nestjs/common';
import { JwtAuthGuard } from '../../auth/guards/jwt-auth.guard';
import { QuestionService } from '../services/question.service';
import { AnswerService } from '../services/answer.service';
export declare class QuestionOwnerGuard extends JwtAuthGuard {
    private readonly questionService;
    private readonly answerService;
    constructor(questionService: QuestionService, answerService: AnswerService);
    canActivate(context: ExecutionContext): Promise<any>;
}

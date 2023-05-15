import { ExecutionContext } from '@nestjs/common';
import { JwtAuthGuard } from '../../auth/guards/jwt-auth.guard';
import { TeacherService } from '../services/teacher.service';
export declare class IsTeacherGuard extends JwtAuthGuard {
    private readonly teacherService;
    constructor(teacherService: TeacherService);
    canActivate(context: ExecutionContext): Promise<any>;
}

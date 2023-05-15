import { ExecutionContext } from '@nestjs/common';
import { JwtAuthGuard } from '../../auth/guards/jwt-auth.guard';
import { StudentService } from '../services/student.service';
export declare class IsStudentGuard extends JwtAuthGuard {
    private readonly studentService;
    constructor(studentService: StudentService);
    canActivate(context: ExecutionContext): Promise<any>;
}

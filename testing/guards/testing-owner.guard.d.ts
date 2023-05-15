import { ExecutionContext } from '@nestjs/common';
import { JwtAuthGuard } from '../../auth/guards/jwt-auth.guard';
import { TestingService } from '../services/testing.service';
export declare class TestingOwnerGuard extends JwtAuthGuard {
    private readonly testingService;
    constructor(testingService: TestingService);
    canActivate(context: ExecutionContext): Promise<any>;
}

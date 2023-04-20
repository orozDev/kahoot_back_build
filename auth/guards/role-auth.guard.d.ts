import { ExecutionContext } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { JwtAuthGuard } from './jwt-auth.guard';
export declare class RoleAuthGuard extends JwtAuthGuard {
    private reflector;
    constructor(reflector: Reflector);
    canActivate(context: ExecutionContext): Promise<any>;
}

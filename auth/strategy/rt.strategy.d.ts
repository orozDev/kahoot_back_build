import { ConfigService } from '@nestjs/config';
import { Strategy } from 'passport-jwt';
import { AuthService } from '../auth.service';
declare const RtStrategy_base: new (...args: any[]) => Strategy;
export declare class RtStrategy extends RtStrategy_base {
    private config;
    private authService;
    constructor(config: ConfigService, authService: AuthService);
    validate(payload: any): Promise<any>;
}
export {};

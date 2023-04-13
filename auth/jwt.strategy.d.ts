import { ConfigService } from '@nestjs/config';
import { AuthService } from './auth.service';
import { Strategy } from 'passport-jwt';
declare const JwtStrategy_base: new (...args: any[]) => Strategy;
export declare class JwtStrategy extends JwtStrategy_base {
    private config;
    private authService;
    constructor(config: ConfigService, authService: AuthService);
    validate(payload: any): Promise<any>;
}
export {};

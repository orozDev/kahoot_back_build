import { JwtService } from '@nestjs/jwt';
export declare class AbstractJwtAuthGuard {
    decodeUser(req: any, jwtService: JwtService, secret: string): any;
}

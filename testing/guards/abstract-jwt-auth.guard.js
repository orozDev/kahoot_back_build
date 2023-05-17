"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AbstractJwtAuthGuard = void 0;
const common_1 = require("@nestjs/common");
class AbstractJwtAuthGuard {
    decodeUser(req, jwtService, secret) {
        const authHeader = req.headers.authorization;
        if (authHeader) {
            const bearer = authHeader.split(' ')[0];
            const token = authHeader.split(' ')[1];
            if (bearer !== 'Bearer' || !token) {
                throw new common_1.ForbiddenException({
                    message: 'The user is not authenticated',
                });
            }
            try {
                return jwtService.verify(token, { secret });
            }
            catch (err) {
                return null;
            }
        }
        else
            return null;
    }
}
exports.AbstractJwtAuthGuard = AbstractJwtAuthGuard;
//# sourceMappingURL=abstract-jwt-auth.guard.js.map
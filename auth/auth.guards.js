"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RoleAuthGuard = exports.RtGuard = exports.JwtAuthGuard = exports.LocalAuthGuard = void 0;
const common_1 = require("@nestjs/common");
const passport_1 = require("@nestjs/passport");
const roles_auth_decorator_1 = require("./roles-auth.decorator");
const core_1 = require("@nestjs/core");
let LocalAuthGuard = class LocalAuthGuard extends (0, passport_1.AuthGuard)('local') {
};
LocalAuthGuard = __decorate([
    (0, common_1.Injectable)()
], LocalAuthGuard);
exports.LocalAuthGuard = LocalAuthGuard;
let JwtAuthGuard = class JwtAuthGuard extends (0, passport_1.AuthGuard)('jwt') {
};
JwtAuthGuard = __decorate([
    (0, common_1.Injectable)()
], JwtAuthGuard);
exports.JwtAuthGuard = JwtAuthGuard;
let RtGuard = class RtGuard extends (0, passport_1.AuthGuard)('jwt-refresh') {
};
RtGuard = __decorate([
    (0, common_1.Injectable)()
], RtGuard);
exports.RtGuard = RtGuard;
let RoleAuthGuard = class RoleAuthGuard extends JwtAuthGuard {
    constructor(reflector) {
        super();
        this.reflector = reflector;
    }
    async canActivate(context) {
        const previousResult = await super.canActivate(context);
        if (!previousResult) {
            return false;
        }
        const req = context.switchToHttp().getRequest();
        const requiredRoles = this.reflector.getAllAndOverride(roles_auth_decorator_1.ROLES_KEY, [context.getHandler(), context.getClass()]);
        if (!requiredRoles) {
            return true;
        }
        const userRole = req.user.role;
        return requiredRoles.includes(userRole);
    }
};
RoleAuthGuard = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [core_1.Reflector])
], RoleAuthGuard);
exports.RoleAuthGuard = RoleAuthGuard;
//# sourceMappingURL=auth.guards.js.map
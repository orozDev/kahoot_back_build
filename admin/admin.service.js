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
exports.AdminService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("typeorm");
const user_roles_enum_1 = require("../user/user-roles.enum");
const bcryptjs = require("bcryptjs");
let AdminService = class AdminService {
    constructor(dataSource) {
        this.dataSource = dataSource;
    }
    async authenticate(username, password) {
        const repository = this.dataSource.getRepository('user');
        const user = await repository.findOne({
            where: { username },
            select: [
                'username',
                'password',
                'id',
                'role',
                'avatar',
                'phone',
                'email',
                'firstName',
                'lastName',
            ],
        });
        if (!user)
            return null;
        const passwordEquals = await bcryptjs.compare(password, user.password);
        if (user && passwordEquals && user.role === user_roles_enum_1.UserRolesEnum.ADMIN) {
            return { username: user.username, email: user.email };
        }
        return null;
    }
};
AdminService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [typeorm_1.DataSource])
], AdminService);
exports.AdminService = AdminService;
//# sourceMappingURL=admin.service.js.map
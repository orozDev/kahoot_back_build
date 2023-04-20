"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AdminModule = void 0;
const common_1 = require("@nestjs/common");
const nestjs_1 = require("@adminjs/nestjs");
const adminjs_1 = require("adminjs");
const typeorm_1 = require("typeorm");
const bcryptjs = require("bcryptjs");
const user_roles_enum_1 = require("../user/user-roles.enum");
const user_admin_1 = require("./resources/user.admin");
const quiz_admin_1 = require("./resources/quiz.admin");
const answer_admin_1 = require("./resources/answer.admin");
const klass_admin_1 = require("./resources/klass.admin");
const category_admin_1 = require("./resources/category.admin");
const question_admin_1 = require("./resources/question.admin");
const typeorm_2 = require("@adminjs/typeorm");
adminjs_1.default.registerAdapter({ Database: typeorm_2.Database, Resource: typeorm_2.Resource });
let AdminModule = class AdminModule {
};
AdminModule = __decorate([
    (0, common_1.Module)({
        imports: [
            nestjs_1.AdminModule.createAdminAsync({
                inject: [typeorm_1.DataSource],
                useFactory: (dataSource) => ({
                    adminJsOptions: {
                        rootPath: '/admin',
                        resources: [
                            user_admin_1.userAdminOptions,
                            quiz_admin_1.quizAdminOptions,
                            answer_admin_1.answerAdminOptions,
                            klass_admin_1.klassAdminOptions,
                            category_admin_1.categoryAdminOptions,
                            question_admin_1.questionAdminOptions,
                        ],
                    },
                    auth: {
                        authenticate: async (username, password) => {
                            const repository = dataSource.getRepository('user');
                            const user = await repository.findOne({
                                where: { username },
                                select: ['password', 'email', 'role', 'username'],
                            });
                            console.log(user);
                            if (!user)
                                return null;
                            const passwordEquals = await bcryptjs.compare(password, user.password);
                            if (user && passwordEquals && user.role === user_roles_enum_1.UserRolesEnum.ADMIN) {
                                return { username: user.username, email: user.email };
                            }
                            return null;
                        },
                        cookieName: 'adminjs',
                        cookiePassword: 'secret',
                    },
                    sessionOptions: {
                        resave: true,
                        saveUninitialized: true,
                        secret: 'secret',
                    },
                }),
            }),
        ],
    })
], AdminModule);
exports.AdminModule = AdminModule;
//# sourceMappingURL=admin.module.js.map
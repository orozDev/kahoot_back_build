"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserModule = void 0;
const common_1 = require("@nestjs/common");
const user_service_1 = require("./services/user.service");
const user_controller_1 = require("./controllers/user.controller");
const typeorm_1 = require("@nestjs/typeorm");
const user_entity_1 = require("./entities/user.entity");
const auth_module_1 = require("../auth/auth.module");
const file_module_1 = require("../files/file.module");
const config_1 = require("@nestjs/config");
const utils_module_1 = require("../utils/utils.module");
const quiz_entity_1 = require("../quiz/entities/quiz.entity");
const teacher_entity_1 = require("./entities/teacher.entity");
const student_entity_1 = require("./entities/student.entity");
const student_controller_1 = require("./controllers/student.controller");
const student_service_1 = require("./services/student.service");
const teacher_controller_1 = require("./controllers/teacher.controller");
const teacher_service_1 = require("./services/teacher.service");
const klass_entity_1 = require("../klass/entities/klass.entity");
const school_entity_1 = require("../school/entities/school.entity");
let UserModule = class UserModule {
};
UserModule = __decorate([
    (0, common_1.Module)({
        imports: [
            typeorm_1.TypeOrmModule.forFeature([
                user_entity_1.UserEntity,
                quiz_entity_1.QuizEntity,
                teacher_entity_1.TeacherEntity,
                student_entity_1.StudentEntity,
                klass_entity_1.KlassEntity,
                school_entity_1.SchoolEntity,
            ]),
            (0, common_1.forwardRef)(() => auth_module_1.AuthModule),
            file_module_1.FileModule,
            config_1.ConfigModule,
            utils_module_1.UtilsModule,
        ],
        controllers: [user_controller_1.UserController, student_controller_1.StudentController, teacher_controller_1.TeacherController],
        providers: [user_service_1.UserService, student_service_1.StudentService, teacher_service_1.TeacherService],
        exports: [user_service_1.UserService],
    })
], UserModule);
exports.UserModule = UserModule;
//# sourceMappingURL=user.module.js.map
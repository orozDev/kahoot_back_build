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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TeacherService = void 0;
const common_1 = require("@nestjs/common");
const teacher_entity_1 = require("../entities/teacher.entity");
const utils_service_1 = require("../../utils/utils.service");
const school_entity_1 = require("../../school/entities/school.entity");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const user_entity_1 = require("../entities/user.entity");
const user_roles_enum_1 = require("../enum/user-roles.enum");
let TeacherService = class TeacherService {
    constructor(utils, schoolRepository, userRepository, teacherRepository) {
        this.utils = utils;
        this.schoolRepository = schoolRepository;
        this.userRepository = userRepository;
        this.teacherRepository = teacherRepository;
    }
    async create(createTeacherDto) {
        const { school, user } = createTeacherDto;
        const userInstance = await this.utils.getObjectOr404(this.userRepository, { where: { id: user } });
        if (userInstance.role !== user_roles_enum_1.UserRolesEnum.TEACHER) {
            throw new common_1.BadRequestException({
                user: [`Role should be ${user_roles_enum_1.UserRolesEnum.TEACHER}`],
            });
        }
        const teacher = new teacher_entity_1.TeacherEntity();
        teacher.school = await this.utils.getObjectOr404(this.schoolRepository, { where: { id: school } });
        teacher.user = userInstance;
        return await this.teacherRepository.save(teacher);
    }
    async update(id, updateTeacherDto) {
        const teacher = await this.teacherRepository.findOneBy({ id });
        if (!teacher)
            throw new common_1.NotFoundException({ message: 'Teacher not found' });
        teacher.school = await this.utils.getObjectOr404(this.schoolRepository, { where: { id: updateTeacherDto.school } });
        return await this.teacherRepository.save(teacher);
    }
    async remove(id) {
        const teacher = await this.teacherRepository.findOneBy({ id });
        if (!teacher)
            throw new common_1.NotFoundException({ message: 'Teacher not found' });
        await teacher.remove();
    }
    async findOne(id) {
        const teacher = await this.teacherRepository.findOneBy({ id });
        if (!teacher)
            throw new common_1.NotFoundException({ message: 'Teacher not found' });
        return teacher;
    }
};
TeacherService = __decorate([
    (0, common_1.Injectable)(),
    __param(1, (0, typeorm_1.InjectRepository)(school_entity_1.SchoolEntity)),
    __param(2, (0, typeorm_1.InjectRepository)(user_entity_1.UserEntity)),
    __param(3, (0, typeorm_1.InjectRepository)(teacher_entity_1.TeacherEntity)),
    __metadata("design:paramtypes", [utils_service_1.UtilsService,
        typeorm_2.Repository,
        typeorm_2.Repository,
        typeorm_2.Repository])
], TeacherService);
exports.TeacherService = TeacherService;
//# sourceMappingURL=teacher.service.js.map
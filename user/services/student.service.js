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
exports.StudentService = void 0;
const common_1 = require("@nestjs/common");
const student_entity_1 = require("../entities/student.entity");
const typeorm_1 = require("@nestjs/typeorm");
const klass_entity_1 = require("../../klass/entities/klass.entity");
const typeorm_2 = require("typeorm");
const user_entity_1 = require("../entities/user.entity");
const utils_service_1 = require("../../utils/utils.service");
const user_roles_enum_1 = require("../enum/user-roles.enum");
let StudentService = class StudentService {
    constructor(klassRepository, userRepository, studentRepository, utils) {
        this.klassRepository = klassRepository;
        this.userRepository = userRepository;
        this.studentRepository = studentRepository;
        this.utils = utils;
    }
    async findOne(id) {
        const student = await this.studentRepository.findOne({
            where: { id },
            relations: { user: true, klass: true },
        });
        if (!student)
            throw new common_1.NotFoundException({ message: 'Student not found' });
        return student;
    }
    async create(createStudentDto) {
        const { klass, user } = createStudentDto;
        const userInstance = await this.utils.getObjectOr404(this.userRepository, { where: { id: user } });
        if (userInstance.role !== user_roles_enum_1.UserRolesEnum.USER) {
            throw new common_1.BadRequestException({
                user: [`Role should be ${user_roles_enum_1.UserRolesEnum.USER}`],
            });
        }
        const student = new student_entity_1.StudentEntity();
        student.klass = await this.utils.getObjectOr404(this.klassRepository, { where: { id: klass } });
        student.user = userInstance;
        return await this.studentRepository.save(student);
    }
    async update(id, updateStudentDto) {
        const student = await this.studentRepository.findOneBy({ id });
        if (!student)
            throw new common_1.NotFoundException({ message: 'Student not found' });
        student.klass = await this.utils.getObjectOr404(this.klassRepository, { where: { id: updateStudentDto.klass } });
        return await this.studentRepository.save(student);
    }
    async remove(id) {
        const student = await this.studentRepository.findOneBy({ id });
        if (!student)
            throw new common_1.NotFoundException({ message: 'Student not found' });
        await student.remove();
    }
};
StudentService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(klass_entity_1.KlassEntity)),
    __param(1, (0, typeorm_1.InjectRepository)(user_entity_1.UserEntity)),
    __param(2, (0, typeorm_1.InjectRepository)(student_entity_1.StudentEntity)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        typeorm_2.Repository,
        typeorm_2.Repository,
        utils_service_1.UtilsService])
], StudentService);
exports.StudentService = StudentService;
//# sourceMappingURL=student.service.js.map
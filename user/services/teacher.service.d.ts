import { CreateTeacherDto } from '../dto/teacher/create-teacher.dto';
import { TeacherEntity } from '../entities/teacher.entity';
import { UtilsService } from '../../utils/utils.service';
import { SchoolEntity } from '../../school/entities/school.entity';
import { Repository } from 'typeorm';
import { UserEntity } from '../entities/user.entity';
import { UpdateTeacherDto } from '../dto/teacher/update-teacher.dto';
export declare class TeacherService {
    private utils;
    private schoolRepository;
    private userRepository;
    private teacherRepository;
    constructor(utils: UtilsService, schoolRepository: Repository<SchoolEntity>, userRepository: Repository<UserEntity>, teacherRepository: Repository<TeacherEntity>);
    create(createTeacherDto: CreateTeacherDto): Promise<TeacherEntity>;
    update(id: number, updateTeacherDto: UpdateTeacherDto): Promise<TeacherEntity>;
    remove(id: number): Promise<void>;
    findOne(id: number): Promise<TeacherEntity>;
}

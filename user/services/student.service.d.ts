import { CreateStudentDto } from '../dto/student/create-student.dto';
import { StudentEntity } from '../entities/student.entity';
import { KlassEntity } from '../../klass/entities/klass.entity';
import { Repository } from 'typeorm';
import { UserEntity } from '../entities/user.entity';
import { UtilsService } from '../../utils/utils.service';
import { StudentDto } from '../dto/student/student.dto';
export declare class StudentService {
    private klassRepository;
    private userRepository;
    private studentRepository;
    private utils;
    constructor(klassRepository: Repository<KlassEntity>, userRepository: Repository<UserEntity>, studentRepository: Repository<StudentEntity>, utils: UtilsService);
    findOne(id: number): Promise<StudentEntity>;
    create(createStudentDto: CreateStudentDto): Promise<StudentEntity>;
    update(id: number, updateStudentDto: StudentDto): Promise<StudentEntity>;
    remove(id: number): Promise<void>;
}

import { CreateStudentDto } from '../dto/student/create-student.dto';
import { StudentDto } from '../dto/student/student.dto';
import { StudentService } from '../services/student.service';
export declare class StudentController {
    private studentService;
    constructor(studentService: StudentService);
    createAsAdmin(createStudentDto: CreateStudentDto): Promise<import("../entities/student.entity").StudentEntity>;
    create(createStudentDto: StudentDto, req: any): Promise<import("../entities/student.entity").StudentEntity>;
    update(id: string, updateStudentDto: StudentDto): Promise<import("../entities/student.entity").StudentEntity>;
    remove(id: string): Promise<void>;
}

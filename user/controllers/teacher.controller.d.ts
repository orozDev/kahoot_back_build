import { TeacherService } from '../services/teacher.service';
import { CreateTeacherDto } from '../dto/teacher/create-teacher.dto';
import { UpdateTeacherDto } from '../dto/teacher/update-teacher.dto';
export declare class TeacherController {
    private teacherService;
    constructor(teacherService: TeacherService);
    createAsAdmin(createTeacherDto: CreateTeacherDto): Promise<import("../entities/teacher.entity").TeacherEntity>;
    create(createTeacherDto: UpdateTeacherDto, req: any): Promise<import("../entities/teacher.entity").TeacherEntity>;
    update(id: string, updateTeacherDto: UpdateTeacherDto): Promise<import("../entities/teacher.entity").TeacherEntity>;
    remove(id: string): Promise<void>;
}

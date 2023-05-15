import { SubjectService } from './subject.service';
import { CreateSubjectDto } from './dto/create-subject.dto';
import { UpdateSubjectDto } from './dto/update-subject.dto';
import { PaginationQueryDto } from '../utils/dto/paginationQueryDto';
export declare class SubjectController {
    private categoryService;
    constructor(categoryService: SubjectService);
    create(createCategoryDto: CreateSubjectDto): Promise<import("./entities/subject.entity").SubjectEntity>;
    findAll(query: PaginationQueryDto): Promise<import("../utils/interfaces/complex-request.interface").IComplexRequest<import("./entities/subject.entity").SubjectEntity[]>>;
    findOne(id: string): Promise<import("./entities/subject.entity").SubjectEntity>;
    update(id: string, updateCategoryDto: UpdateSubjectDto): Promise<import("./entities/subject.entity").SubjectEntity>;
    remove(id: string): Promise<void>;
}

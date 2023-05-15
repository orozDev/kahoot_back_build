import { CreateSubjectDto } from './dto/create-subject.dto';
import { UpdateSubjectDto } from './dto/update-subject.dto';
import { SubjectEntity } from './entities/subject.entity';
import { Repository } from 'typeorm';
import { PaginationQueryDto } from '../utils/dto/paginationQueryDto';
import { UtilsService } from '../utils/utils.service';
import { IComplexRequest } from '../utils/interfaces/complex-request.interface';
export declare class SubjectService {
    private subjectRepository;
    private utils;
    constructor(subjectRepository: Repository<SubjectEntity>, utils: UtilsService);
    create(createSubjectDto: CreateSubjectDto): Promise<SubjectEntity>;
    findAll(query: PaginationQueryDto): Promise<IComplexRequest<SubjectEntity[]>>;
    findOne(id: number): Promise<SubjectEntity>;
    update(id: number, updateSubjectDto: UpdateSubjectDto): Promise<SubjectEntity>;
    remove(id: number): Promise<void>;
}

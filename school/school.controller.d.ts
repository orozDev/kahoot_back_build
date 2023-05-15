import { SchoolService } from './school.service';
import { CreateSchoolDto } from './dto/create-school.dto';
import { UpdateSchoolDto } from './dto/update-school.dto';
import { SchoolQueryDto } from './dto/school-query.dto';
export declare class SchoolController {
    private readonly schoolService;
    constructor(schoolService: SchoolService);
    create(createSchoolDto: CreateSchoolDto): Promise<import("./entities/school.entity").SchoolEntity>;
    findAll(query: SchoolQueryDto): Promise<import("../utils/interfaces/complex-request.interface").IComplexRequest<import("./entities/school.entity").SchoolEntity[]>>;
    findOne(id: string): Promise<import("./entities/school.entity").SchoolEntity>;
    update(id: string, updateSchoolDto: UpdateSchoolDto): Promise<import("./entities/school.entity").SchoolEntity>;
    remove(id: string): Promise<void>;
}

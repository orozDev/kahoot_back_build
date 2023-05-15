import { CreateSchoolDto } from './dto/create-school.dto';
import { UpdateSchoolDto } from './dto/update-school.dto';
import { UtilsService } from '../utils/utils.service';
import { SchoolEntity } from './entities/school.entity';
import { CityEntity } from '../city/entities/city.entity';
import { Repository } from 'typeorm';
import { SchoolQueryDto } from './dto/school-query.dto';
import { IComplexRequest } from '../utils/interfaces/complex-request.interface';
export declare class SchoolService {
    private schoolRepository;
    private cityRepository;
    private utils;
    constructor(schoolRepository: Repository<SchoolEntity>, cityRepository: Repository<CityEntity>, utils: UtilsService);
    create(createSchoolDto: CreateSchoolDto): Promise<SchoolEntity>;
    findAll(query: SchoolQueryDto): Promise<IComplexRequest<SchoolEntity[]>>;
    findOne(id: number): Promise<SchoolEntity>;
    update(id: number, updateSchoolDto: UpdateSchoolDto): Promise<SchoolEntity>;
    remove(id: number): Promise<void>;
}

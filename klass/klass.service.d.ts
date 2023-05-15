import { CreateKlassDto } from './dto/create-klass.dto';
import { UpdateKlassDto } from './dto/update-klass.dto';
import { KlassEntity } from './entities/klass.entity';
import { Repository } from 'typeorm';
import { UtilsService } from '../utils/utils.service';
import { IComplexRequest } from '../utils/interfaces/complex-request.interface';
import { SchoolEntity } from '../school/entities/school.entity';
import { KlassQueryDto } from './dto/klass-query.dto';
export declare class KlassService {
    private klassRepository;
    private schoolRepository;
    private utils;
    constructor(klassRepository: Repository<KlassEntity>, schoolRepository: Repository<SchoolEntity>, utils: UtilsService);
    validateCreation(dto: CreateKlassDto): Promise<boolean>;
    validateUpdating(dto: UpdateKlassDto, id: number): Promise<boolean>;
    create(createKlassDto: CreateKlassDto): Promise<KlassEntity>;
    findAll(query: KlassQueryDto): Promise<IComplexRequest<KlassEntity[]>>;
    findOne(id: number): Promise<KlassEntity>;
    update(id: number, updateKlassDto: UpdateKlassDto): Promise<KlassEntity>;
    remove(id: number): Promise<void>;
}

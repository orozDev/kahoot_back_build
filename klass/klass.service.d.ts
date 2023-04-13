import { CreateKlassDto } from './dto/create-klass.dto';
import { UpdateKlassDto } from './dto/update-klass.dto';
import { PaginationQueryDto } from '../utils/dto/paginationQueryDto';
import { KlassEntity } from './entities/klass.entity';
import { Repository } from 'typeorm';
import { UtilsService } from '../utils/utils.service';
import { IComplexRequest } from '../utils/interfaces/complex-request.interface';
export declare class KlassService {
    private klassRepository;
    private utils;
    constructor(klassRepository: Repository<KlassEntity>, utils: UtilsService);
    create(createKlassDto: CreateKlassDto): Promise<KlassEntity>;
    findAll(query: PaginationQueryDto): Promise<IComplexRequest<KlassEntity[]>>;
    findOne(id: number): Promise<KlassEntity>;
    update(id: number, updateKlassDto: UpdateKlassDto): Promise<KlassEntity>;
    remove(id: number): Promise<void>;
}

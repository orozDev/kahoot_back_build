import { KlassService } from './klass.service';
import { CreateKlassDto } from './dto/create-klass.dto';
import { UpdateKlassDto } from './dto/update-klass.dto';
import { PaginationQueryDto } from '../utils/dto/paginationQueryDto';
export declare class KlassController {
    private klassService;
    constructor(klassService: KlassService);
    create(createKlassDto: CreateKlassDto): Promise<import("./entities/klass.entity").KlassEntity>;
    findAll(query: PaginationQueryDto): Promise<import("../utils/interfaces/complex-request.interface").IComplexRequest<import("./entities/klass.entity").KlassEntity[]>>;
    findOne(id: string): Promise<import("./entities/klass.entity").KlassEntity>;
    update(id: string, updateKlassDto: UpdateKlassDto): Promise<import("./entities/klass.entity").KlassEntity>;
    remove(id: string): Promise<void>;
}

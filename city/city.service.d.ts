import { CreateCityDto } from './dto/create-city.dto';
import { UpdateCityDto } from './dto/update-city.dto';
import { CityEntity } from './entities/city.entity';
import { Repository } from 'typeorm';
import { UtilsService } from '../utils/utils.service';
import { PaginationQueryDto } from '../utils/dto/paginationQueryDto';
import { IComplexRequest } from '../utils/interfaces/complex-request.interface';
export declare class CityService {
    private cityRepository;
    private utils;
    constructor(cityRepository: Repository<CityEntity>, utils: UtilsService);
    create(createCityDto: CreateCityDto): Promise<CityEntity>;
    findAll(query: PaginationQueryDto): Promise<IComplexRequest<CityEntity[]>>;
    findOne(id: number): Promise<CityEntity>;
    update(id: number, updateCityDto: UpdateCityDto): Promise<CityEntity>;
    remove(id: number): Promise<void>;
}

import { CityService } from './city.service';
import { CreateCityDto } from './dto/create-city.dto';
import { UpdateCityDto } from './dto/update-city.dto';
import { PaginationQueryDto } from '../utils/dto/paginationQueryDto';
export declare class CityController {
    private readonly cityService;
    constructor(cityService: CityService);
    create(createCityDto: CreateCityDto): Promise<import("./entities/city.entity").CityEntity>;
    findAll(query: PaginationQueryDto): Promise<import("../utils/interfaces/complex-request.interface").IComplexRequest<import("./entities/city.entity").CityEntity[]>>;
    findOne(id: string): Promise<import("./entities/city.entity").CityEntity>;
    update(id: string, updateCityDto: UpdateCityDto): Promise<import("./entities/city.entity").CityEntity>;
    remove(id: string): Promise<void>;
}

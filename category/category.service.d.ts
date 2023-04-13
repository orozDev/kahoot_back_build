import { CreateCategoryDto } from './dto/create-category.dto';
import { UpdateCategoryDto } from './dto/update-category.dto';
import { CategoryEntity } from './entities/category.entity';
import { Repository } from 'typeorm';
import { PaginationQueryDto } from '../utils/dto/paginationQueryDto';
import { UtilsService } from '../utils/utils.service';
import { IComplexRequest } from '../utils/interfaces/complex-request.interface';
export declare class CategoryService {
    private categoryRepository;
    private utils;
    constructor(categoryRepository: Repository<CategoryEntity>, utils: UtilsService);
    create(createCategoryDto: CreateCategoryDto): Promise<CategoryEntity>;
    findAll(query: PaginationQueryDto): Promise<IComplexRequest<CategoryEntity[]>>;
    findOne(id: number): Promise<CategoryEntity>;
    update(id: number, updateCategoryDto: UpdateCategoryDto): Promise<CategoryEntity>;
    remove(id: number): Promise<void>;
}

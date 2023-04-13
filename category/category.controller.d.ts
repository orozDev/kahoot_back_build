import { CategoryService } from './category.service';
import { CreateCategoryDto } from './dto/create-category.dto';
import { UpdateCategoryDto } from './dto/update-category.dto';
import { PaginationQueryDto } from '../utils/dto/paginationQueryDto';
export declare class CategoryController {
    private categoryService;
    constructor(categoryService: CategoryService);
    create(createCategoryDto: CreateCategoryDto): Promise<import("./entities/category.entity").CategoryEntity>;
    findAll(query: PaginationQueryDto): Promise<import("../utils/interfaces/complex-request.interface").IComplexRequest<import("./entities/category.entity").CategoryEntity[]>>;
    findOne(id: string): Promise<import("./entities/category.entity").CategoryEntity>;
    update(id: string, updateCategoryDto: UpdateCategoryDto): Promise<import("./entities/category.entity").CategoryEntity>;
    remove(id: string): Promise<void>;
}

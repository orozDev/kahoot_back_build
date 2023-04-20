import { CreateQuizDto } from './dto/create-quiz.dto';
import { UpdateQuizDto } from './dto/update-quiz.dto';
import { FileService } from '../files/file.service';
import { QuizEntity } from './entities/quiz.entity';
import { Repository } from 'typeorm';
import { CategoryEntity } from '../category/entities/category.entity';
import { KlassEntity } from '../klass/entities/klass.entity';
import { UserEntity } from '../user/entities/user.entity';
import { UtilsService } from '../utils/utils.service';
import { QuizQueryDto } from './dto/quiz-query.dto';
import { IComplexRequest } from '../utils/interfaces/complex-request.interface';
export declare class QuizService {
    private fileService;
    private utils;
    private quizRepository;
    private categoryRepository;
    private klassRepository;
    private userRepository;
    constructor(fileService: FileService, utils: UtilsService, quizRepository: Repository<QuizEntity>, categoryRepository: Repository<CategoryEntity>, klassRepository: Repository<KlassEntity>, userRepository: Repository<UserEntity>);
    create(dto: CreateQuizDto): Promise<QuizEntity>;
    findAll(query: QuizQueryDto): Promise<IComplexRequest<QuizEntity[]>>;
    findOne(id: number): Promise<QuizEntity>;
    update(id: number, updateQuizDto: UpdateQuizDto): Promise<QuizEntity>;
    remove(id: number): Promise<void>;
}

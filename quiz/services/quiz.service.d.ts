import { CreateQuizDto } from '../dto/quiz/create-quiz.dto';
import { UpdateQuizDto } from '../dto/quiz/update-quiz.dto';
import { FileService } from '../../files/file.service';
import { QuizEntity } from '../entities/quiz.entity';
import { Repository } from 'typeorm';
import { SubjectEntity } from '../../subject/entities/subject.entity';
import { KlassEntity } from '../../klass/entities/klass.entity';
import { UserEntity } from '../../user/entities/user.entity';
import { UtilsService } from '../../utils/utils.service';
import { QuizQueryDto } from '../dto/quiz/quiz-query.dto';
import { IComplexRequest } from '../../utils/interfaces/complex-request.interface';
export declare class QuizService {
    private fileService;
    private utils;
    private quizRepository;
    private subjectRepository;
    private klassRepository;
    private userRepository;
    constructor(fileService: FileService, utils: UtilsService, quizRepository: Repository<QuizEntity>, subjectRepository: Repository<SubjectEntity>, klassRepository: Repository<KlassEntity>, userRepository: Repository<UserEntity>);
    validate(dto: CreateQuizDto | UpdateQuizDto): boolean;
    create(dto: CreateQuizDto): Promise<QuizEntity>;
    findAll(query: QuizQueryDto): Promise<IComplexRequest<QuizEntity[]>>;
    findOne(id: number): Promise<QuizEntity>;
    update(id: number, updateQuizDto: UpdateQuizDto): Promise<QuizEntity>;
    remove(id: number): Promise<void>;
}

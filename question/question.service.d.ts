import { QuestionEntity } from './entities/question.entity';
import { Repository } from 'typeorm';
import { CreateQuestionDto } from './dto/create-question.dto';
import { FileService } from '../files/file.service';
import { UtilsService } from '../utils/utils.service';
import { QuestionQueryDto } from './dto/question-query.dto';
import { UpdateQuestionDto } from './dto/update-question.dto';
import { IComplexRequest } from '../utils/interfaces/complex-request.interface';
import { QuizEntity } from '../quiz/entities/quiz.entity';
import { AnswerEntity } from '../answer/entities/answer.entity';
export declare class QuestionService {
    private fileService;
    private utils;
    private questionRepository;
    private quizRepository;
    private answerRepository;
    constructor(fileService: FileService, utils: UtilsService, questionRepository: Repository<QuestionEntity>, quizRepository: Repository<QuizEntity>, answerRepository: Repository<AnswerEntity>);
    create(createQuestionDto: CreateQuestionDto): Promise<QuestionEntity>;
    findAll(query: QuestionQueryDto): Promise<IComplexRequest<QuestionEntity[]>>;
    findOne(id: number): Promise<QuestionEntity>;
    remove(id: number): Promise<void>;
    update(id: number, updateQuestionDto: UpdateQuestionDto): Promise<QuestionEntity>;
}

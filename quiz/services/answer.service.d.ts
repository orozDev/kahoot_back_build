import { Repository } from 'typeorm';
import { QuestionEntity } from '../entities/question.entity';
import { UtilsService } from '../../utils/utils.service';
import { FileService } from '../../files/file.service';
import { AnswerQueryDto } from '../dto/answer/answer-qeury.dto';
import { IComplexRequest } from '../../utils/interfaces/complex-request.interface';
import { UpdateAnswerDto } from '../dto/answer/update-answer.dto';
import { AnswerEntity } from '../entities/answer.entity';
export declare class AnswerService {
    private answerRepository;
    private questionRepository;
    private utils;
    private fileService;
    constructor(answerRepository: Repository<AnswerEntity>, questionRepository: Repository<QuestionEntity>, utils: UtilsService, fileService: FileService);
    findAll(query: AnswerQueryDto): Promise<IComplexRequest<AnswerEntity[]>>;
    findOne(id: number): Promise<AnswerEntity>;
    findOneForGuard(id: number): Promise<AnswerEntity>;
    update(id: number, updateAnswerDto: UpdateAnswerDto): Promise<AnswerEntity>;
    remove(id: number): Promise<void>;
}

import { CreateSelectedAnswerDto } from '../dto/selected-answer/create-selected-answer.dto';
import { UtilsService } from '../../utils/utils.service';
import { SelectedAnswerEntity } from '../entities/selected-answer.entity';
import { Repository } from 'typeorm';
import { ParticipantEntity } from '../entities/participant.entity';
import { QuestionEntity } from 'src/question/entities/question.entity';
import { AnswerEntity } from '../../answer/entities/answer.entity';
import { SelectedQueryDto } from '../dto/selected-answer/selected-query.dto';
import { IComplexRequest } from '../../utils/interfaces/complex-request.interface';
import { UpdateSelectedAnswerDto } from '../dto/selected-answer/update-selected-answer.dto';
export declare class SelectedAnswerService {
    private utils;
    private selectedAnswerRepository;
    private participantRepository;
    private questionRepository;
    private answerRepository;
    constructor(utils: UtilsService, selectedAnswerRepository: Repository<SelectedAnswerEntity>, participantRepository: Repository<ParticipantEntity>, questionRepository: Repository<QuestionEntity>, answerRepository: Repository<AnswerEntity>);
    create(createSelectedAnswerDto: CreateSelectedAnswerDto): Promise<SelectedAnswerEntity>;
    findAll(query: SelectedQueryDto): Promise<IComplexRequest<SelectedAnswerEntity[]>>;
    findOne(id: number): Promise<SelectedAnswerEntity>;
    update(id: number, updateSelectedAnswerDto: UpdateSelectedAnswerDto): Promise<SelectedAnswerEntity>;
    remove(id: number): Promise<void>;
}

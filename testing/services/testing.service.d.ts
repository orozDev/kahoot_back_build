import { CreateTestingDto } from '../dto/testing/create-testing.dto';
import { UpdateTestingDto } from '../dto/testing/update-testing.dto';
import { TestingEntity } from '../entities/testing.entity';
import { Repository } from 'typeorm';
import { UtilsService } from '../../utils/utils.service';
import { QuizEntity } from '../../quiz/entities/quiz.entity';
import { UserEntity } from '../../user/entities/user.entity';
import { TestingQueryDto } from '../dto/testing/testing-query.dto';
import { IComplexRequest } from '../../utils/interfaces/complex-request.interface';
import { ParticipantEntity } from '../entities/participant.entity';
export declare class TestingService {
    private testingRepository;
    private quizRepository;
    private userRepository;
    private participantRepository;
    private utils;
    constructor(testingRepository: Repository<TestingEntity>, quizRepository: Repository<QuizEntity>, userRepository: Repository<UserEntity>, participantRepository: Repository<ParticipantEntity>, utils: UtilsService);
    create(createTestingDto: CreateTestingDto): Promise<TestingEntity>;
    findAll(query: TestingQueryDto): Promise<IComplexRequest<TestingEntity[]>>;
    findOne(id: number): Promise<TestingEntity>;
    findOneByCode(code: number): Promise<TestingEntity>;
    update(id: number, updateTestingDto: UpdateTestingDto): Promise<TestingEntity>;
    remove(id: number): Promise<void>;
    private makeCode;
}

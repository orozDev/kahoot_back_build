import { CreateParticipantDto } from '../dto/participant/create-participant.dto';
import { ParticipantQueryDto } from '../dto/participant/participant-query.dto';
import { UpdateParticipantDto } from '../dto/participant/update-participant.dto';
import { ParticipantEntity } from '../entities/participant.entity';
import { UserEntity } from '../../user/entities/user.entity';
import { Repository } from 'typeorm';
import { TestingEntity } from '../entities/testing.entity';
import { UtilsService } from '../../utils/utils.service';
import { IComplexRequest } from '../../utils/interfaces/complex-request.interface';
import { TestingGateway } from '../testing.gateway';
export declare class ParticipantService {
    private participantRepository;
    private userRepository;
    private testingRepository;
    private utils;
    private testingGateway;
    constructor(participantRepository: Repository<ParticipantEntity>, userRepository: Repository<UserEntity>, testingRepository: Repository<TestingEntity>, utils: UtilsService, testingGateway: TestingGateway);
    create(createParticipantDto: CreateParticipantDto): Promise<ParticipantEntity>;
    findAll(query: ParticipantQueryDto): Promise<IComplexRequest<ParticipantEntity[]>>;
    findOne(id: number): Promise<ParticipantEntity>;
    update(id: number, updateParticipantDto: UpdateParticipantDto): Promise<ParticipantEntity>;
    remove(id: number): Promise<void>;
}

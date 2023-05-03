import { ParticipantService } from '../services/participant.service';
import { CreateParticipantDto } from '../dto/participant/create-participant.dto';
import { ParticipantQueryDto } from '../dto/participant/participant-query.dto';
import { UpdateParticipantDto } from '../dto/participant/update-participant.dto';
export declare class ParticipantController {
    private participantService;
    constructor(participantService: ParticipantService);
    create(createParticipantDto: CreateParticipantDto): Promise<import("../entities/participant.entity").ParticipantEntity>;
    findAll(query: ParticipantQueryDto): Promise<import("../../utils/interfaces/complex-request.interface").IComplexRequest<import("../entities/participant.entity").ParticipantEntity[]>>;
    findOne(id: string): Promise<import("../entities/participant.entity").ParticipantEntity>;
    update(id: string, updateParticipantDto: UpdateParticipantDto): Promise<import("../entities/participant.entity").ParticipantEntity>;
    remove(id: string): Promise<void>;
}

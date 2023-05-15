import { AnswerQueryDto } from '../dto/answer/answer-qeury.dto';
import { UpdateAnswerDto } from '../dto/answer/update-answer.dto';
import { AnswerService } from '../services/answer.service';
export declare class AnswerController {
    private readonly answerService;
    constructor(answerService: AnswerService);
    findAll(query: AnswerQueryDto): Promise<import("../../utils/interfaces/complex-request.interface").IComplexRequest<import("../entities/answer.entity").AnswerEntity[]>>;
    findOne(id: string): Promise<import("../entities/answer.entity").AnswerEntity>;
    update(id: string, updateAnswerDto: UpdateAnswerDto): Promise<import("../entities/answer.entity").AnswerEntity>;
    remove(id: string): Promise<void>;
}

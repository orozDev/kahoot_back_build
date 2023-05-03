import { SelectedAnswerService } from '../services/selected-answer.service';
import { CreateSelectedAnswerDto } from '../dto/selected-answer/create-selected-answer.dto';
import { SelectedQueryDto } from '../dto/selected-answer/selected-query.dto';
import { UpdateSelectedAnswerDto } from '../dto/selected-answer/update-selected-answer.dto';
export declare class SelectedAnswerController {
    private selectedAnswerService;
    constructor(selectedAnswerService: SelectedAnswerService);
    create(createSelectedAnswerDto: CreateSelectedAnswerDto): Promise<import("../entities/selected-answer.entity").SelectedAnswerEntity>;
    findAll(query: SelectedQueryDto): Promise<import("../../utils/interfaces/complex-request.interface").IComplexRequest<import("../entities/selected-answer.entity").SelectedAnswerEntity[]>>;
    findOne(id: string): Promise<import("../entities/selected-answer.entity").SelectedAnswerEntity>;
    update(id: string, updateSelectedAnswerDto: UpdateSelectedAnswerDto): Promise<import("../entities/selected-answer.entity").SelectedAnswerEntity>;
    remove(id: string): Promise<void>;
}

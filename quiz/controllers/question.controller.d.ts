import { CreateQuestionDto } from '../dto/question/create-question.dto';
import { QuestionQueryDto } from '../dto/question/question-query.dto';
import { UpdateQuestionDto } from '../dto/question/update-question.dto';
import { QuestionService } from '../services/question.service';
export declare class QuestionController {
    private questionService;
    constructor(questionService: QuestionService);
    create(createQuestionDto: CreateQuestionDto): Promise<import("../entities/question.entity").QuestionEntity>;
    findAll(query: QuestionQueryDto): Promise<import("../../utils/interfaces/complex-request.interface").IComplexRequest<import("../entities/question.entity").QuestionEntity[]>>;
    findOne(id: string): Promise<import("../entities/question.entity").QuestionEntity>;
    update(id: string, updateQuestionDto: UpdateQuestionDto): Promise<import("../entities/question.entity").QuestionEntity>;
    remove(id: string): Promise<void>;
}

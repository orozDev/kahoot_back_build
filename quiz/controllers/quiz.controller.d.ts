import { QuizService } from '../services/quiz.service';
import { CreateQuizDto } from '../dto/quiz/create-quiz.dto';
import { UpdateQuizDto } from '../dto/quiz/update-quiz.dto';
import { QuizQueryDto } from '../dto/quiz/quiz-query.dto';
export declare class QuizController {
    private quizService;
    constructor(quizService: QuizService);
    create(createQuizDto: CreateQuizDto): Promise<import("../entities/quiz.entity").QuizEntity>;
    findAll(query: QuizQueryDto): Promise<import("../../utils/interfaces/complex-request.interface").IComplexRequest<import("../entities/quiz.entity").QuizEntity[]>>;
    findOne(id: string): Promise<import("../entities/quiz.entity").QuizEntity>;
    update(id: string, updateQuizDto: UpdateQuizDto): Promise<import("../entities/quiz.entity").QuizEntity>;
    remove(id: string): Promise<void>;
}

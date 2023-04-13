import { CreateQuizDto } from './dto/create-quiz.dto';
import { UpdateQuizDto } from './dto/update-quiz.dto';
import { FileService } from '../files/file.service';
export declare class QuizService {
    private fileService;
    constructor(fileService: FileService);
    create(createQuizDto: CreateQuizDto): string;
    findAll(): string;
    findOne(id: number): string;
    update(id: number, updateQuizDto: UpdateQuizDto): string;
    remove(id: number): string;
}

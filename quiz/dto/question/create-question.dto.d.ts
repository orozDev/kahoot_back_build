import { MemoryStoredFile } from 'nestjs-form-data';
import { CreateAnswerDto } from '../answer/create-answer.dto';
export declare class CreateQuestionDto {
    quiz: number;
    title: string;
    content: string;
    image: MemoryStoredFile;
    answers: CreateAnswerDto[];
    order: number;
}

import { CreateAnswerDto } from './create-answer.dto';
import { MemoryStoredFile } from 'nestjs-form-data';
export declare class CreateQuestionDto {
    quiz: number;
    title: string;
    content: string;
    image: MemoryStoredFile;
    answers: CreateAnswerDto[];
}

import { MemoryStoredFile } from 'nestjs-form-data';
export declare class CreateAnswerDto {
    value: string;
    image: MemoryStoredFile;
    isCorrect: boolean;
}

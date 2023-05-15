import { MemoryStoredFile } from 'nestjs-form-data';
export declare class UpdateQuestionDto {
    quiz: number;
    title: string;
    content: string;
    image: MemoryStoredFile;
    order: number;
}

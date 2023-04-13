import { MemoryStoredFile } from 'nestjs-form-data';
export declare class CreateQuizDto {
    title: string;
    description: string;
    image: MemoryStoredFile;
    categories: number[];
    klasses: number[];
    user: number;
    isORT: boolean;
    isPublished: boolean;
}

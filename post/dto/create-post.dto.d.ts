import { MemoryStoredFile } from 'nestjs-form-data';
export declare class CreatePostDto {
    title: string;
    description: string;
    image: MemoryStoredFile;
    content: string;
    author: number;
}

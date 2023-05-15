import { PaginationQueryDto } from '../../../utils/dto/paginationQueryDto';
export declare class ParticipantQueryDto extends PaginationQueryDto {
    user: number;
    testing: number;
    search: string;
    subject: number;
    klass: number;
}

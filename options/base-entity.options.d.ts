import { BaseEntity as MainBaseEntity } from 'typeorm';
export declare abstract class BaseEntity extends MainBaseEntity {
    id: number;
    createdAt: Date;
    updatedAt: Date;
}

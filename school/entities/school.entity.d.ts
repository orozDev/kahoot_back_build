import { BaseEntity } from '../../options/base-entity.options';
import { CityEntity } from '../../city/entities/city.entity';
import { KlassEntity } from '../../klass/entities/klass.entity';
export declare class SchoolEntity extends BaseEntity {
    title: string;
    description: string;
    content: string;
    link: string;
    city: CityEntity;
    klasses: KlassEntity[];
}

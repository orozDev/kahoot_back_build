import { TestingService } from '../services/testing.service';
import { CreateTestingDto } from '../dto/testing/create-testing.dto';
import { UpdateTestingDto } from '../dto/testing/update-testing.dto';
import { TestingQueryDto } from '../dto/testing/testing-query.dto';
import { TestingGateway } from '../testing.gateway';
export declare class TestingController {
    private readonly testingService;
    private testingGateway;
    constructor(testingService: TestingService, testingGateway: TestingGateway);
    create(createTestingDto: CreateTestingDto): Promise<import("../entities/testing.entity").TestingEntity>;
    findAll(query: TestingQueryDto): Promise<import("../../utils/interfaces/complex-request.interface").IComplexRequest<import("../entities/testing.entity").TestingEntity[]>>;
    findOne(id: string): Promise<import("../entities/testing.entity").TestingEntity>;
    findOneByCode(code: string): Promise<import("../entities/testing.entity").TestingEntity>;
    update(id: string, updateTestingDto: UpdateTestingDto): Promise<import("../entities/testing.entity").TestingEntity>;
    remove(id: string): Promise<void>;
}

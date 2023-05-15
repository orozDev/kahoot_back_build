import { UserRolesEnum } from '../enum/user-roles.enum';
import { BaseEntity } from '../../options/base-entity.options';
import { TestingEntity } from '../../testing/entities/testing.entity';
import { StudentEntity } from './student.entity';
import { TeacherEntity } from './teacher.entity';
import { QuizEntity } from '../../quiz/entities/quiz.entity';
export declare class UserEntity extends BaseEntity {
    avatar: string;
    username: string;
    password: string;
    phone: string;
    email: string;
    firstName: string;
    lastName: string;
    isActive: boolean;
    role: UserRolesEnum;
    student: StudentEntity;
    teacher: TeacherEntity;
    quizzers: QuizEntity[];
    completedTests: TestingEntity[];
}

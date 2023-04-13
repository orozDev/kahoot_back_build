"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.quizAdminOptions = void 0;
const quiz_entity_1 = require("../../quiz/entities/quiz.entity");
exports.quizAdminOptions = {
    resource: quiz_entity_1.QuizEntity,
    options: {
        listProperties: ['id', 'title'],
    },
};
//# sourceMappingURL=quiz.admin.js.map
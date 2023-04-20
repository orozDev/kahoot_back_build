"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.questionAdminOptions = void 0;
const question_entity_1 = require("../../question/entities/question.entity");
exports.questionAdminOptions = {
    resource: question_entity_1.QuestionEntity,
    options: {
        listProperties: ['id', 'title'],
    },
};
//# sourceMappingURL=question.admin.js.map
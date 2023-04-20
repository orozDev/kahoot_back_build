"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.answerAdminOptions = void 0;
const answer_entity_1 = require("../../answer/entities/answer.entity");
exports.answerAdminOptions = {
    resource: answer_entity_1.AnswerEntity,
    options: {
        listProperties: ['id', 'question_id', 'value', 'isCorrect'],
    },
};
//# sourceMappingURL=answer.admin.js.map
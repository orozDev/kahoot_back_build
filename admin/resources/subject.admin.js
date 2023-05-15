"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.subjectAdminOptions = void 0;
const subject_entity_1 = require("../../subject/entities/subject.entity");
exports.subjectAdminOptions = {
    resource: subject_entity_1.SubjectEntity,
    options: {
        listProperties: ['id', 'title'],
    },
};
//# sourceMappingURL=subject.admin.js.map
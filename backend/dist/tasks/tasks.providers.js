"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.tasksProviders = void 0;
const tasks_schema_1 = require("./schemas/tasks.schema");
exports.tasksProviders = [
    {
        provide: 'TASK_MODEL',
        useFactory: (mongoose) => mongoose.model('Task', tasks_schema_1.TaskSchema),
        inject: ['DATABASE_CONNECTION'],
    },
];
//# sourceMappingURL=tasks.providers.js.map
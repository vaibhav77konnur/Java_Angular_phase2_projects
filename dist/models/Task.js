"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Task = void 0;
class Task {
    constructor(title, description, isCompleted = false) {
        this.title = title;
        this.description = description;
        this.isCompleted = isCompleted;
    }
    markAsComplete() {
        this.isCompleted = true;
    }
}
exports.Task = Task;

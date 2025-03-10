"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
const readline = __importStar(require("readline"));
const TaskManager_1 = require("./services/TaskManager");
const taskManager = new TaskManager_1.TaskManager();
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});
function showMenu() {
    console.log("\nTask Manager System");
    console.log("1. Add Task");
    console.log("2. View Tasks");
    console.log("3. Mark Task as Complete");
    console.log("4. Exit");
    rl.question("Select an option: ", handleUserInput);
}
function handleUserInput(option) {
    switch (option.trim()) {
        case "1":
            rl.question("Enter task title: ", (title) => {
                rl.question("Enter task description: ", (description) => {
                    taskManager.addTask(title, description);
                    showMenu();
                });
            });
            break;
        case "2":
            console.log("\nTasks:");
            taskManager.getTasks().forEach((task, index) => {
                console.log(`${index + 1}. ${task.title} - ${task.isCompleted ? "Completed" : "Pending"}`);
            });
            showMenu();
            break;
        case "3":
            rl.question("Enter task title to mark as complete: ", (title) => {
                taskManager.markTaskComplete(title);
                showMenu();
            });
            break;
        case "4":
            console.log("Exiting...");
            rl.close();
            break;
        default:
            console.log("Invalid option. Please try again.");
            showMenu();
            break;
    }
}
showMenu();

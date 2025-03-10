import * as readline from "readline";
import { TaskManager } from "./services/TaskManager";

const taskManager = new TaskManager();
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

function handleUserInput(option: string) {
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
        console.log(
          `${index + 1}. ${task.title} - ${
            task.isCompleted ? "Completed" : "Pending"
          }`
        );
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

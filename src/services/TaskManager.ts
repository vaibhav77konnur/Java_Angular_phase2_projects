import { Task } from "../models/Task";

export class TaskManager {
  private tasks: Task[] = [];

  addTask(title: string, description: string): void {
    const newTask = new Task(title, description);
    this.tasks.push(newTask);
    console.log(`Task "${title}" added successfully.`);
  }

  getTasks(): Task[] {
    return this.tasks;
  }

  markTaskComplete(title: string): void {
    const task = this.tasks.find((task) => task.title === title);
    if (task) {
      task.markAsComplete();
      console.log(`Task "${title}" marked as complete.`);
    } else {
      console.log(`Task "${title}" not found.`);
    }
  }
}

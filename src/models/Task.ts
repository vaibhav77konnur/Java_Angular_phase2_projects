export class Task {
  constructor(
    public title: string,
    public description: string,
    public isCompleted: boolean = false
  ) {}

  markAsComplete(): void {
    this.isCompleted = true;
  }
}

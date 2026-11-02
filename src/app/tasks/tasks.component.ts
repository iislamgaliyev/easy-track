import { Component, EventEmitter, Input, Output } from '@angular/core';
import { DUMMY_USERS } from '../dummy-users';
import { TaskComponent } from './task/task.component';
import { AddTaskDialogComponent } from './add-task-dialog/add-task-dialog.component';
import { TasksService } from './tasks.service';

@Component({
  standalone: true,
  selector: 'app-tasks',
  imports: [TaskComponent, AddTaskDialogComponent],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css',
})
export class TasksComponent {
  users = DUMMY_USERS;
  @Input({ required: true }) userId!: string;
  @Input({ required: true }) name?: string;
  @Output() addTask = new EventEmitter<string>();
  isAddingTask = false;

  constructor(private tasksService: TasksService) {}

  get selectedUserTasks() {
    return this.tasksService.getUserTasks(this.userId);
  }

  get selectedUserName() {
    return this.name ?? '';
  }

  onCloseAddTask() {
    this.isAddingTask = false;
  }

  onStartAddTask() {
    this.isAddingTask = true;
  }
}

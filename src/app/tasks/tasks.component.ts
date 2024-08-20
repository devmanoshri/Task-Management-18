import { Component, Input } from '@angular/core';
import { TaskComponent } from './task/task.component';
import { NewTaskComponent } from './new-task/new-task.component';
import { NewTaskData } from './task/task.model';
import { TasksService } from './tasks.service';
//import {TASKS} from './dummy-tasks';

@Component({
  selector: 'app-tasks',

  // imports: [TaskComponent, NewTaskComponent],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.scss',
})
export class TasksComponent {
  @Input({ required: true }) id!: string;
  @Input({ required: true }) name!: string;
  isAddingTask = false;

  constructor(private taskService: TasksService) {}

  get selectedUserTasks() {
    return this.taskService.getSelectedUserTasks(this.id);
  }

  // onCompleteTaskId(taskId: string) {
  //   this.taskService.removeTask(taskId);
  // }

  onAddingTask() {
    this.isAddingTask = true;
  }
  onCancelAddTask() {
    this.isAddingTask = false;
  }

  onAddTask(taskData: NewTaskData) {
    this.taskService.addTask(taskData, this.id);
    this.isAddingTask = false;
  }
}

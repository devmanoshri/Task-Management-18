import { DatePipe } from '@angular/common';
import { Component, Input, inject } from '@angular/core';
import { CardComponent } from '../../shared/card/card.component';
import { TasksService } from '../tasks.service';
import { type Task } from './task.model';
@Component({
  selector: 'app-task',
  standalone: true,
  imports: [CardComponent, DatePipe],
  templateUrl: './task.component.html',
  styleUrl: './task.component.scss',
})
export class TaskComponent {
  @Input({ required: true }) task!: Task;
  // @Output() complete = new EventEmitter<string>();
  private tasksServices = inject(TasksService);

  onCompleteTask() {
    //this.complete.emit(this.task.id);
    this.tasksServices.removeTask(this.task.id);
  }
}

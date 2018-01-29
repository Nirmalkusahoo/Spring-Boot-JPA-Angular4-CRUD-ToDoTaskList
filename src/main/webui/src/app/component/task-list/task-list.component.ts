import { Component, OnInit } from '@angular/core';
import { TaskService } from "../../service/task.service";
import { TaskModel } from "../../model/taskModel";

@Component({
  selector: 'task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit {

  constructor(public taskService:TaskService) { }

  taskList:TaskModel[];
  ngOnInit() {
    this.taskList=this.taskService.taskList;
  }
  updateTask(task:TaskModel, index:number){
    this.taskService.index=index;
    this.taskService.editTask.emit(task);
  }

}

import { Component, OnInit } from '@angular/core';
import { TaskModel } from "../../model/taskModel";
import { TaskService } from "../../service/task.service";
import { MESSAGE } from "../../constants/message";

@Component({
  selector: 'task-form',
  templateUrl: './task-form.component.html',
  styleUrls: ['./task-form.component.css']
})
export class TaskFormComponent implements OnInit {

  constructor(public taskService:TaskService) { }

  taskListButton:boolean=true;
  taskObj:TaskModel;
  showList:boolean=false;
  taskList:any;

  
  ngOnInit() {
    this.taskObj=new TaskModel();
    this.taskService.postDefaultData()
      .subscribe(
        (data)=>{
          console.log("Default posted Data"+data)
        },
        (error:any)=>{
          alert("Got error"+error);
        },
        ()=>{}
      );

    this.taskService.editTask.subscribe(
      (data)=>{
        this.taskService.taskList.splice(this.taskService.index,1);
        this.taskObj=data;
      }
    )

    

    
  }

  

  submit(taskModel:TaskModel){
    if(JSON.stringify(taskModel)===JSON.stringify({})){
      return ;
    }
    this.taskService.saveTask(taskModel)
      .subscribe(
        (data)=>{
          this.taskService.taskList.push(data);
          this.taskService.alertMessage=true;
          this.taskService.message=MESSAGE.create;
        },
        (error:any)=>{
          this.taskService.message=error;
          console.log(error);
        },
        ()=>{

        }
      )

  }
   showTaskList(){
    this.taskService.getTaskList()
      .subscribe(
        (data)=>{
          this.taskList=data;
        },
        (error:any)=>{
          alert("Error "+error);
        },
        ()=>{}
      )
    }
    

}

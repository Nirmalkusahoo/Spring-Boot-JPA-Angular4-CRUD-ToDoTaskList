import { Injectable,EventEmitter } from '@angular/core';
import { TaskModel } from "../model/taskModel";
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';




@Injectable()
export class TaskService {

  constructor(private http:Http) { }

  taskList:TaskModel[]=[];
  editTask=new EventEmitter<TaskModel>();
  index:number;
  message:string;
  alertMessage:boolean=false;

  postDefaultData(){
    return this.http.post('/task/defaultData',this.defaultTask)
      .map(
        (response:Response)=>{
          response.json();
          this.taskList.push(response.json());

        }
      )
      .catch(
        (error:Response)=>{
          return Observable.throw(error)
        }
      )
  }

  getTaskList(){
    return this.http.get('/task/listTask')
      .map(
        (reposne:Response)=>reposne.json()
      )
      .catch(
        (error:Response)=>{
          return Observable.throw(error)
        }
      )
  }

  saveTask(task:TaskModel){
    return this.http.post('/task/save',task)
      .map(
        (reposne:Response)=>reposne.json()
      ).
      catch(
        (error:Response)=>{
          return Observable.throw(error);
        }
      )
  }

   defaultTask:TaskModel=
   { 
    taskName: "CRUD Frontend Application",
    taskDetail: "Make Sample Angular Application",
    taskOwner: "Nirmal Sahoo",
    status: "Completed"
   }

  /*taskList:TaskModel=
   { 
    // taskId: 6753,
    taskName: "CRUD Frontend Application",
    taskDetail: "Make Sample Angular Application",
    taskOwner: "Nirmal Sahoo",
    status: "Complete"
   },
   { 
    taskId: 7845,
    taskName: "CRUD BackEnd Application",
    taskDetail: "Make Sample Spring boot  Application",
    taskOwner: "Nirmal Sahoo",
    status: "In Progress"
   },
   { 
    taskId: 6753,
    taskName: "CRUD Angular And Spring Boot Application",
    taskDetail: "Make Sample Angular +Spring Boot Application",
    taskOwner: "Nirmal Sahoo",
    status: "Not Started"
   },*/
  
}

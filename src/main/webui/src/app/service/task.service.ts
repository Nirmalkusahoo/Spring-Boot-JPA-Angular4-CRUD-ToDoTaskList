import { throwError as observableThrowError, Observable } from 'rxjs';

import { catchError, map } from 'rxjs/operators';
import { Injectable, EventEmitter } from '@angular/core';
import { TaskModel } from '../model/taskModel';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  constructor(private http: HttpClient) {}

  public taskList: TaskModel[] = [];
  public editTask = new EventEmitter<TaskModel>();
  public index: number;
  public message: string;
  public alertMessage: boolean = false;
  public defaultTask: TaskModel = {
    taskName: 'CRUD Frontend Application',
    taskDetail: 'Make Sample Angular Application',
    taskOwner: 'Nirmal Sahoo',
    status: 'Completed',
  };
  public postDefaultData(): Observable<any> {
    return this.http.post('/task/defaultData', this.defaultTask).pipe(
      map((response: TaskModel) => {
        this.taskList.push(response);
      }),
      catchError((error: Response) => {
        return observableThrowError(error);
      })
    );
  }

  public getTaskList(): Observable<any> {
    return this.http.get('/task/listTask').pipe(
      catchError((error: Response) => {
        return observableThrowError(error);
      })
    );
  }

  public saveTask(task: TaskModel): Observable<any> {
    return this.http.post('/task/save', task);
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

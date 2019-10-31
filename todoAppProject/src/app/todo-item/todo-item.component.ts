import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { TodoItemModel } from '../app.model';
import { task_priority } from '../app.config';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.scss']
})
export class TodoItemComponent implements OnInit {

  @Input() task:TodoItemModel;
  @Input() index:number;
  @Output() onUpdateTask: EventEmitter<{item:TodoItemModel,index:number}>;
  @Output() onDeleteTask: EventEmitter<number>;

  show:boolean
  constructor() {
   
    this.onDeleteTask= new EventEmitter();
    this.onUpdateTask= new EventEmitter();
  }

  ngOnInit() {
    if(this.index>0){
      this.show=false;
    }
    else{
     this.show=true;
   }

    console.log(`task is ${this.task} index is ${this.index} adn show is ${this.show}`)
  }

  getTaskName():String{
    return this.task.taskName;
  }

  getPriority():task_priority{
    return this.task.priority;
  }

  getDueDate():String{
    
    return this.task.dueDate.toLocaleString();// .getMonth()+"-"+this.task.dueDate.getDay() +"-"+this.task.dueDate.getFullYear();
  }
  setPriority(priority:number)
  {
    if(confirm("Do you want to change the task priority?"))
    {
      this.task = new TodoItemModel(this.task.taskName,priority);
      this.updateTask();
    //this.task.setPriority(priority);
    console.log(`priority changed to ${this.getPriority()}`);
    }
    return false;
  }

  updateTask()
  {
    this.onUpdateTask.emit({item:this.task,index:this.index});
  }

  deleteTask()
  {
    if(confirm("Do you want to delete the task '"+this.task.taskName+"'  ?")){
    this.onDeleteTask.emit(this.index);
  }
  }

}

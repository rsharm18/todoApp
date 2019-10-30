import { Component, OnInit, Input } from '@angular/core';
import { TodoItemModel } from '../app.model';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.scss']
})
export class TodoItemComponent implements OnInit {

  @Input() task:TodoItemModel;
  @Input() index:number;
  show:boolean
  constructor() {
   
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

  getDueDate():Date{
    return this.task.dueDate;
  }
  setPriority(priority:number)
  {
    this.task.setPriority(priority);
    console.log(`priority changed to ${this.getPriority()}`);
    return false;
  }

}

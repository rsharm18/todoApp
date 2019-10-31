import { Component, OnInit } from '@angular/core';
import { TodoServiceImp } from '../services/todo-service.service';
import { TodoItemModel } from '../app.model';
import { task_priority } from '../app.config';

@Component({
  selector: 'app-new-todo-item',
  templateUrl: './new-todo-item.component.html',
  styleUrls: ['./new-todo-item.component.scss']
})
export class NewTodoItemComponent implements OnInit {

  myTask:String;
  priority:task_priority;
  editMode:boolean;

  constructor(private taskService:TodoServiceImp) { }

  ngOnInit() {
  }

  saveTask()
  {
    console.log(`this.priority = ${this.priority}`);

    if (this.myTask !== null && this.priority!=null) {
      //Get the input value
      let task = new TodoItemModel(this.myTask,this.priority);

      if (!this.editMode) {
         console.log(`adding ${task}`);
         this.taskService.addTodoItem(task);
      }
      //set edit mode to false and clear form
      this.editMode = false;
      this.myTask = "";
  }
}

getPriorityList():{}{
  let obj = [
              {"key":task_priority.URGENT,"value":"URGENT"},
              {"key":task_priority.DAYS ,"value":"DAYS"},
              {"key":task_priority.WEEKS ,"value":"WEEK"}
          ]
  return obj;
}

}

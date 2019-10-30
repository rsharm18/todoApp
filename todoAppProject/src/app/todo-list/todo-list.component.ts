import { Component, OnInit,EventEmitter } from '@angular/core';
import { TodoServiceImp } from '../services/todo-service.service';
import { TodoItemModel } from '../app.model';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit {

  toDoTasks: Observable<TodoItemModel[]>;

  constructor(private service:TodoServiceImp)
  {

  }

  getItems() : TodoItemModel[]
  {
    return this.service.getTodoItems();
  }
  

  ngOnInit() {

    //this.toDoTasks=this.service.getTodoItems().
  }

  updateTask(obj:{item:TodoItemModel,index:number})
  {
    console.log(`received update request for ${obj.item.taskName} ${obj['index']}`);
    this.service.updateTodoItem(obj.item,obj.index);
  }

  deleteTask(index:number)
  {
    console.log(`received delete request for ${index}`);
    this.service.deleteTodoItem(index);
  }

}

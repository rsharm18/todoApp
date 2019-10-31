import { Component, OnInit,EventEmitter } from '@angular/core';
import { TodoServiceImp } from '../services/todo-service.service';
import { TodoItemModel } from '../app.model';
import { Observable } from 'rxjs';
import { task_priority } from '../app.config';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit {

  tasks:TodoItemModel[]=new Array<TodoItemModel>();

  constructor(private service:TodoServiceImp)
  {

  }

  getItems() : TodoItemModel[]
  {
    //return this.service.getTodoItems();
    return this.tasks;
  }
  

  ngOnInit() {

    //subscribe to the new item and add it to array
     this.service.newItem.subscribe(item =>{
      if(item != null){
        return this.tasks.push(item);
      }
    });

    //add a new todo item and this should reflect in the tasks[] array as it has subsribed to it.
    this.service.addTodoItem(new TodoItemModel("Create Report",task_priority.DAYS ));
    this.service.addTodoItem(new TodoItemModel("Submit Report",task_priority.WEEKS));
    this.service.addTodoItem(new TodoItemModel("Check in the Code",task_priority.URGENT));
    this.service.addTodoItem(new TodoItemModel("Submit in D2L",task_priority.DAYS));
 
    //this.toDoTasks=this.service.getTodoItems(). --not needed anymore
  }

  updateTask(obj:{item:TodoItemModel,index:number})
  {
    console.log(`received update request for ${obj.item.taskName} ${obj['index']}`);
   // this.service.updateTodoItem(obj.item,obj.index);
  }

  deleteTask(index:number)
  {
    console.log(`received delete request for ${index}`);
    this.tasks.splice(index, 1);
    //this.service.deleteTodoItem(index);
  }

}

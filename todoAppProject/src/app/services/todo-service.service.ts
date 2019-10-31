import { Injectable } from '@angular/core';
import { TodoItemModel } from '../app.model';
import { TodoService} from './interface/TodoService';
import { Subject, BehaviorSubject } from 'rxjs';

enum task_priority{"URGENT","DAYS","WEEKS"};

@Injectable({
  providedIn: 'root'
})

export class TodoServiceImp implements TodoService{

  todoItems:TodoItemModel[] = [] ;
  newItem:Subject<TodoItemModel> = new BehaviorSubject<TodoItemModel>(null);

  item:TodoItemModel;

  addTodoItem(item: TodoItemModel) {
    this.item = item;
    this.newItem.next(this.item);
    //console.log(`before no of items ${this.todoItems.length}`);
    this.todoItems.push(this.item);
    //console.log(`After no of items ${this.todoItems.length}`);
  }
 
 
/**
 * the below methods are needed if using promise/service directly. 
 * in the constructor I have subscribed to the new todoItem
 */

// updateTodoItem(updatedItem: TodoItemModel, index:number) {
    
//   this.todoItems[index] = updatedItem;

//   console.log(`updated item ${updatedItem.taskName}  ${updatedItem.dueDate}  ${updatedItem.priority}`);

//   //this.printItems();
// }
// deleteTodoItem(index:number) {
//   this.todoItems.splice(index, 1);
// }

// printItems()
// {
// this.todoItems.forEach(updatedItem => console.log(`item ${updatedItem.taskName}  ${updatedItem.dueDate}  ${updatedItem.priority}`));
// }
// getTodoItems(): TodoItemModel[] {
//     //console.log(`no of items ${this.todoItems.length}`);
//     if(this.todoItems.length == 0)
//     {
//       this.populateToDoList();
//     }
//     return this.todoItems;
//   }

//   private populateToDoList()
//   {
//     this.todoItems.push(new TodoItemModel("Create Report",new Date(),task_priority.DAYS));

//     this.todoItems.push(new TodoItemModel("Submit Report",new Date(),task_priority.WEEKS));

//     this.todoItems.push(new TodoItemModel("Check in the Code",new Date(),task_priority.URGENT));

//     this.todoItems.push(new TodoItemModel("Submit in D2L",new Date(),task_priority.URGENT));
//   }
}

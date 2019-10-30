import { Component } from '@angular/core';
import { TodoService } from './services/interface/TodoService';
import { TodoItemModel } from './app.model';
import { TodoServiceImp } from './services/todo-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'todoAppProject';

  items:TodoItemModel[];
  constructor(private service:TodoServiceImp)
  {
    this.getItems();
  }

  getItems() : TodoItemModel[]
  {
    console.log("get items called");
    this.items = this.service.getTodoItems();
    console.log(this.items);

    return this.items;
  }


}

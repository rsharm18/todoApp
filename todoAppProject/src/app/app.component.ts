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

  constructor(private service:TodoServiceImp)
  {
    
  }

 


}

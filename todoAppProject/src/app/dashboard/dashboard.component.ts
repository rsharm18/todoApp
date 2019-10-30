import { Component, OnInit } from '@angular/core';
import { TodoServiceImp } from '../services/todo-service.service';
import { TodoItemModel } from '../app.model';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  constructor(private taskService:TodoServiceImp) { }

  ngOnInit() {
  }

 

}

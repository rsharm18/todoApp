import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NewTodoItemComponent } from './new-todo-item/new-todo-item.component';
import { TodoListComponent } from './todo-list/todo-list.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { TodoItemComponent } from './todo-item/todo-item.component';
import { TodoServiceImp } from './services/todo-service.service';
import { FormsModule } from '@angular/forms';
import { PageNotFoundComponentComponent } from './page-not-found-component/page-not-found-component.component';
import { RouterModule, Routes } from '@angular/router';

const appRoutes: Routes = [
  { path: 'dashboard', component: DashboardComponent },  
  { path: '',
    redirectTo: '/dashboard',
    pathMatch: 'full'
  },
  { path: '**', component: PageNotFoundComponentComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    NewTodoItemComponent,
    TodoListComponent,
    DashboardComponent,
    TodoItemComponent,
    PageNotFoundComponentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [TodoServiceImp],
  bootstrap: [AppComponent]
})
export class AppModule { }

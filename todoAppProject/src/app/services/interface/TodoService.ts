import { TodoItemModel } from 'src/app/app.model';
import { Injectable } from '@angular/core';

export interface TodoService{

    addTodoItem(item:TodoItemModel):void;
    

    // not needed as I will using observer to subscribe
    //updateTodoItem(updatedItem:TodoItemModel,index:number):void;
    //deleteTodoItem(index:number):void;
    //getTodoItems():TodoItemModel[];

}
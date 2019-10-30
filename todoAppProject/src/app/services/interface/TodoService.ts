import { TodoItemModel } from 'src/app/app.model';
import { Injectable } from '@angular/core';

export interface TodoService{

    addTodoItem(item:TodoItemModel):void;
    updateTodoItem(item:TodoItemModel, index:number):void;
    deleteTodoItem(item:TodoItemModel, index:number):void;

    getTodoItems():TodoItemModel[];

}
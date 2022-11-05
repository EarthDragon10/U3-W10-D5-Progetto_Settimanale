import { Injectable } from '@angular/core';
import { Todo } from './todo';

@Injectable({
  providedIn: 'root',
})
export class TodosService {
  todosList: Todo[] = [];
  todosCompletedList: Todo[] = [];

  constructor() {}

  getTodos(): void {}

  addToDo(obj: Todo): void {
    this.todosList.push(obj);
  }

  removeToDo(id: number | undefined): void {
    let newArrTodo: Todo[] = this.todosList.filter((todo) => todo.id !== id);
    this.todosList = newArrTodo;
  }

  checkCompleteToDo(id: number | undefined): void {
    console.log(id);

    let todoCompleted: Todo[] = this.todosList.filter((todo) => todo.id == id);
    console.log(todoCompleted);

    let newArrTodo: Todo[] = this.todosList.filter((todo) => todo.id !== id);

    console.log('TodoList senza gli elementi checked', newArrTodo);

    this.todosList = newArrTodo;

    this.todosCompletedList.push(todoCompleted[0]);

    console.log(this.todosCompletedList);
  }
}

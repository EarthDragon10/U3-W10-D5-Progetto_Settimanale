import { Injectable } from '@angular/core';
import { Todo } from './todo';

@Injectable({
  providedIn: 'root',
})
export class TodosService {
  todosList: Todo[] = [];

  constructor() {}

  getTodos(): void {}

  addToDo(obj: Todo): void {
    this.todosList.push(obj);
  }

  // removeToDo(id: number): void {
  //   this.todosList.splice(id, 1);
  // }
}

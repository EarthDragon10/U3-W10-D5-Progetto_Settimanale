import { Injectable } from '@angular/core';
import { Todo } from './todo';

@Injectable({
  providedIn: 'root',
})
export class TodosService {
  todosList: Todo[] = [{ id: 1, title: 'Fare la spesa', completed: true }];

  constructor() {}

  getTodos(): void {}

  addToDo(obj: Todo): void {
    this.todosList.push(obj);
  }

  removeToDo(id: number): void {
    this.todosList.splice(id, 1);
  }
}

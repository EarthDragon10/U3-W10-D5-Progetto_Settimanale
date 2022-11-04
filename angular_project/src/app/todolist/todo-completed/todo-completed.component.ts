import { Component, OnInit } from '@angular/core';
import { Todo } from 'src/app/todo';
import { TodosService } from 'src/app/todos.service';

@Component({
  selector: 'app-todo-completed',
  templateUrl: './todo-completed.component.html',
  styleUrls: ['./todo-completed.component.scss'],
})
export class TodoCompletedComponent implements OnInit {
  constructor(private todosService: TodosService) {}

  ngOnInit(): void {}

  removeToDo(id: number) {
    this.todosService.removeToDo(id);
  }
}

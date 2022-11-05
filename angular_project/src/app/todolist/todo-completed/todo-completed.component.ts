import { Component, OnInit } from '@angular/core';
import { Todo } from 'src/app/todo';
import { TodosService } from 'src/app/todos.service';
import { TodoObj } from 'src/app/classes/todo-obj';

@Component({
  selector: 'app-todo-completed',
  templateUrl: './todo-completed.component.html',
  styleUrls: ['./todo-completed.component.scss'],
})
export class TodoCompletedComponent implements OnInit {
  todosCompleted: Todo[] = [];

  constructor(private todosService: TodosService) {}

  ngOnInit(): void {
    this.todosCompleted = this.todosService.todosCompletedList;
  }
}

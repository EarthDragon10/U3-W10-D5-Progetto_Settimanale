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
  loadingBoolean: boolean = false;
  controlLength: boolean = false;

  constructor(private todosService: TodosService) {}

  ngOnInit(): void {
    this.loadingBoolean = true;

    setTimeout(() => {
      this.todosCompleted = this.todosService.todosCompletedList;
      this.loadingBoolean = false;
    }, 2000);
    // this.todosCompleted = this.todosService.todosCompletedList;
  }
  ngDoCheck(): void {
    setTimeout(() => {
      this.controlLength = true;

      if (this.todosCompleted.length > 0) {
        this.controlLength = false;
      }
    }, 2000);
  }
}

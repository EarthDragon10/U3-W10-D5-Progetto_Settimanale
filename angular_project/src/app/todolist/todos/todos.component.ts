import { Component, OnInit } from '@angular/core';
import { Todo } from 'src/app/todo';
import { TodosService } from 'src/app/todos.service';
import { TodoObj } from 'src/app/classes/todo-obj';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss'],
})
export class TodosComponent implements OnInit {
  todoObj: TodoObj = new TodoObj();
  todoArr: Todo[] = [];
  idObj: number = 0;
  controlLength: boolean = true;

  constructor(private todosService: TodosService) {}

  ngOnInit(): void {
    this.todoArr = this.todosService.todosList;
  }

  // ngOnChanges(): void {
  //   this.todoArr = this.todosService.todosList;
  // }

  addToDo(): void {
    if (this.todosService.todosList.length > -1) {
      this.controlLength = false;
    }

    this.todoObj.id = this.idObj++;
    this.todoObj.completed = false;

    console.log(this.todoObj);
    this.todosService.addToDo(this.todoObj);

    this.todoObj = new TodoObj();
  }

  checkCompleteToDo(item: Todo): void {
    item.completed = true;

    console.log(this.todoObj);

    this.todosService.checkCompleteToDo(item.id);

    this.todoArr = this.todosService.todosList;
  }

  removeToDo(item: Todo): void {
    this.todosService.removeToDo(item.id);
    this.todoArr = this.todosService.todosList;
  }
}

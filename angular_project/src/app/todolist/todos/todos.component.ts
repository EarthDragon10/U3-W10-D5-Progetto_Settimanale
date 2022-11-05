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

  addToDo() {
    if (this.todosService.todosList.length > 0) {
      this.controlLength = false;
    }
    this.todoObj.id = this.idObj++;
    this.todoObj.completed = true;

    console.log(this.todoObj);
    this.todosService.addToDo(this.todoObj);

    this.todoObj = new TodoObj();
  }
  // addToDo(this.todoObj) {
  //   this.todosService.addToDo(todoObj);
  // }

  // removeToDo(id: number) {
  //   this.todosService.removeToDo(id);
  // }
}

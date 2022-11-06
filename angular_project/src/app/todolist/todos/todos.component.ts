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
  loadingBoolean: boolean = false;

  constructor(private todosService: TodosService) {}

  ngOnInit(): void {
    this.todoArr = this.todosService.todosList;
  }

  ngDoCheck(): void {
    this.controlLength = false;

    if (this.todoArr.length == 0) {
      this.controlLength = true;
    }

    console.log('Hook DoCheck é attivata');
    console.log(this.todoArr.length);
  }

  addToDo(): void {
    this.controlLength = false;
    this.loadingBoolean = true;

    console.log(this.controlLength);

    const addFuncToDo = (): void => {
      this.todoObj.id = this.idObj++;
      this.todoObj.completed = false;

      console.log(this.todoObj);
      this.todosService.addToDo(this.todoObj);

      this.todoObj = new TodoObj();

      this.loadingBoolean = false;
    };

    setTimeout(addFuncToDo, 2000);
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

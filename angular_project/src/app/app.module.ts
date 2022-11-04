import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TodolistComponent } from './todolist/todolist.component';
import { TodosComponent } from './todolist/todos/todos.component';
import { TodoCompletedComponent } from './todolist/todo-completed/todo-completed.component';

@NgModule({
  declarations: [
    AppComponent,
    TodolistComponent,
    TodosComponent,
    TodoCompletedComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

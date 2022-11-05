import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TodoCompletedComponent } from './todolist/todo-completed/todo-completed.component';
import { TodosComponent } from './todolist/todos/todos.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'todos' },
  { path: '', component: TodosComponent },
  { path: 'completed', component: TodoCompletedComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

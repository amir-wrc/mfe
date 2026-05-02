import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TodoListComponent } from './todo-list/todo-list.component';

const routes: Routes = [
  { path: '', component: TodoListComponent },
  { path: 'all', component: TodoListComponent },
  { path: 'active', component: TodoListComponent },
  { path: 'completed', component: TodoListComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TodoRoutingModule { }

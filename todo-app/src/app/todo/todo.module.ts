import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { TodoRoutingModule } from './todo-routing.module';
import { TodoListComponent } from './todo-list/todo-list.component';
import { UserInfoComponent } from './user-info/user-info.component';


@NgModule({
  declarations: [
    TodoListComponent,
    UserInfoComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    TodoRoutingModule
  ]
})
export class TodoModule { }

// Export as RemoteEntryModule for Module Federation
export class RemoteEntryModule extends TodoModule { }

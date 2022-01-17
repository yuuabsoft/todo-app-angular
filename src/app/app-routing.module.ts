import {NgModule}          from '@angular/core';
import {
  RouterModule,
  Routes
}                          from '@angular/router';
import {TodoListComponent} from "./todo-list/todo-list.component";
import {TodoAddComponent}  from "./todo-add/todo-add.component";

const routes: Routes = [{
  path:      'todo',
  component: TodoListComponent
}, {
  path:      'todo/add',
  component: TodoAddComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}

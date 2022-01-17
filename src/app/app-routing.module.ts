import {NgModule}            from '@angular/core';
import {
  RouterModule,
  Routes
}                            from '@angular/router';
import {TodoListComponent}   from "./component/todo-list/todo-list.component";
import {TodoAddComponent}    from "./component/todo-add/todo-add.component";
import {TodoUpdateComponent} from "./component/todo-update/todo-update.component";

const routes: Routes = [{
  path:      'todo',
  component: TodoListComponent
}, {
  path:      'todo/add',
  component: TodoAddComponent
}, {path:    'todo/update/:id',
  component: TodoUpdateComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}

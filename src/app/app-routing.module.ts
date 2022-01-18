import {NgModule}                from '@angular/core';
import {
  RouterModule,
  Routes
}                                from '@angular/router';
import {TodoListComponent}       from "./component/todo-list/todo-list.component";
import {TodoAddComponent}        from "./component/todo-add/todo-add.component";
import {TodoUpdateComponent}     from "./component/todo-update/todo-update.component";
import {CategoryListComponent}   from "./component/category-list/category-list.component";
import {CategoryAddComponent}    from "./component/category-add/category-add.component";
import {CategoryUpdateComponent} from "./component/category-update/category-update.component";

const routes: Routes = [{
  path:      'todo',
  component: TodoListComponent
}, {
  path:      'todo/add',
  component: TodoAddComponent
}, {
  path:      'todo/update/:id',
  component: TodoUpdateComponent
}, {
  path:      'category',
  component: CategoryListComponent
}, {
  path:      'category/add',
  component: CategoryAddComponent
}, {
  path:      'category/update/:id',
  component: CategoryUpdateComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}

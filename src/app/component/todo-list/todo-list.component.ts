import {
  Component,
  OnInit
}                               from '@angular/core';
import {TodoService}            from "../../service/todo.service";
import {Todo}                   from "../../model/Todo";
import {MatDialog}              from "@angular/material/dialog";
import {DefaultDialogComponent} from "../default-dialog/default-dialog.component";

@Component({
  selector:    'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls:   ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit {

  todoList: Todo[] = [];

  constructor(private todoService: TodoService, private dialog: MatDialog) {
  }

  ngOnInit() {
    this.getTodoList();
  }

  getTodoList() {
    this.todoService.getTodoList().subscribe(todoList => {
      this.todoList = todoList;
    })
  }

  delete(todo: Todo) {
    let dialog = this.dialog.open(DefaultDialogComponent, {
      width: '250px',
      data:  {title: "Todoを削除しますか？"}
    });
    dialog.afterClosed().subscribe((result) => {
      if (result) this.todoService.deleteTodo(todo.id).subscribe(() => this.getTodoList());
    })
  }
}

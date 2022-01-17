import {
  Component,
  OnInit
}                    from '@angular/core';
import {TodoService} from "../../service/todo.service";
import {Todo}        from "../../model/Todo";

@Component({
  selector:    'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls:   ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit {

  todoList: Todo[] = [];

  constructor(private todoService: TodoService) {
  }

  ngOnInit() {
    this.getTodoList();
  }

  getTodoList() {
    this.todoService.getTodoList().subscribe(todoList => {
      this.todoList = todoList;
    })
  }

  delete(todo: Todo): void {
    this.todoService.deleteTodo(todo.id).subscribe(() => this.getTodoList());
  }
}

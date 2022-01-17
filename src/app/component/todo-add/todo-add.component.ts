import {
  Component,
  OnInit
}                     from '@angular/core';
import {TodoService}  from "../../service/todo.service";
import {Location}     from "@angular/common";
import {
  FormBuilder,
  FormControl,
  FormGroup
}                     from "@angular/forms";
import {Todo}         from "../../model/Todo";
import {TodoAddInput} from "../../model/TodoAddInput";

@Component({
  selector:    'app-todo-add',
  templateUrl: './todo-add.component.html',
  styleUrls:   ['./todo-add.component.scss']
})
export class TodoAddComponent implements OnInit {

  constructor(private todoService: TodoService, private fb: FormBuilder, private location: Location) {
  }

  todoForm: FormGroup = this.fb.group({
    categoryId: [null],
    title:      [''],
    body:       [''],
  })

  ngOnInit() {
  }

  save() {
    const input: TodoAddInput = {
      categoryId: this.todoForm.get("categoryId")?.value,
      title:      this.todoForm.get("title")?.value,
      body:       this.todoForm.get("body")?.value,
    }
    this.todoService.addTodo(input).subscribe(() => this.goBack());
  }

  goBack() {
    this.location.back();
  }
}

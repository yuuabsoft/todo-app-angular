import {
  Component,
  OnInit
}                    from '@angular/core';
import {TodoService} from "../../service/todo.service";
import {Location}    from "@angular/common";
import {
  FormBuilder,
  FormControl,
  FormGroup
}                    from "@angular/forms";
import {Todo}        from "../../model/Todo";

@Component({
  selector:    'app-todo-add',
  templateUrl: './todo-add.component.html',
  styleUrls:   ['./todo-add.component.scss']
})
export class TodoAddComponent implements OnInit {

  constructor(private todoService: TodoService, private fb: FormBuilder, private location: Location) {
  }

  todoForm: FormGroup = this.fb.group({
    categoryId: [''],
    title:      [''],
    body:       [''],
  })

  ngOnInit() {
  }

  save() {
  }

  goBack() {
    this.location.back();
  }
}

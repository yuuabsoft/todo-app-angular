import {
  Component,
  OnInit
}                        from '@angular/core';
import {TodoService}     from "../../service/todo.service";
import {Location}        from "@angular/common";
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators
}                        from "@angular/forms";
import {Todo}            from "../../model/Todo";
import {TodoAddInput}    from "../../model/TodoAddInput";
import {CategoryService} from "../../service/category.service";
import {Category}        from "../../model/Category";
import {Router}          from "@angular/router";

@Component({
  selector:    'app-todo-add',
  templateUrl: './todo-add.component.html',
  styleUrls:   ['./todo-add.component.scss']
})
export class TodoAddComponent implements OnInit {

  constructor(private todoService: TodoService, private categoryService: CategoryService, private fb: FormBuilder, private location: Location, private router: Router) {
  }

  categoryList: Category[] = [];

  todoForm: FormGroup = this.fb.group({
    categoryId: [undefined, [Validators.required]],
    title:      [undefined, [Validators.required]],
    body:       [undefined, [Validators.required]],
  })

  ngOnInit() {
    this.getCategoryList();
  }

  getCategoryList() {
    this.categoryService.getCategoryList().subscribe(categoryList => {
      this.categoryList = categoryList;
    })
  }

  save() {
    const input: TodoAddInput = {
      categoryId: Number(this.todoForm.get("categoryId")?.value),
      title:      this.todoForm.get("title")?.value,
      body:       this.todoForm.get("body")?.value,
    }
    this.todoService.addTodo(input).subscribe(() => this.router.navigate(['/todo']));
  }

  goBack() {
    this.location.back();
  }

  get categoryIdForm() {
    return this.todoForm.get("categoryId");
  }

  get titleForm() {
    return this.todoForm.get("title");
  }

  get bodyForm() {
    return this.todoForm.get("body");
  }
}

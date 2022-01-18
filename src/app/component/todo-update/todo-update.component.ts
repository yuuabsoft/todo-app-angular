import {
  Component,
  OnInit
}                        from '@angular/core';
import {TodoService}     from "../../service/todo.service";
import {CategoryService} from "../../service/category.service";
import {
  FormBuilder,
  FormGroup,
  Validators
}                        from "@angular/forms";
import {Location}        from "@angular/common";
import {Category}        from "../../model/Category";
import {TodoUpdateInput} from "../../model/TodoUpdateInput";
import {
  ActivatedRoute,
  Router
}                        from "@angular/router";
import {Todo}            from "../../model/Todo";

@Component({
  selector:    'app-todo-update',
  templateUrl: './todo-update.component.html',
  styleUrls:   ['./todo-update.component.scss']
})
export class TodoUpdateComponent implements OnInit {

  constructor(private route: ActivatedRoute, private todoService: TodoService, private categoryService: CategoryService, private fb: FormBuilder, private location: Location, private router: Router) {
  }

  todo: Todo | undefined;

  categoryList: Category[] = [];

  // TODO: 列挙型は別の場所に定義した方が良い
  stateList = [{
    "code": 0,
    "name": "TODO(着手前)"
  }, {
    "code": 1,
    "name": "進行中"
  }, {
    "code": 2,
    "name": "完了"
  },];

  todoForm: FormGroup = this.fb.group({
    categoryId: [undefined, [Validators.required]],
    title:      [undefined, [Validators.required]],
    body:       [undefined, [Validators.required]],
    stateCode:  [undefined, [Validators.required]],
  })

  ngOnInit() {
    this.getTodo();
    this.getCategoryList();
  }

  getTodo() {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.todoService.getTodo(id).subscribe(todo => {
      this.todo = todo;
      this.todoForm.patchValue(todo);
      // カテゴリが入れ子になっているため個別にセット
      this.todoForm.patchValue({categoryId: todo.category?.id});
    });
  }

  getCategoryList() {
    this.categoryService.getCategoryList().subscribe(categoryList => {
      this.categoryList = categoryList;
    })
  }

  save() {
    if (!this.todo) {
      return;
    }
    const input: TodoUpdateInput = {
      categoryId: Number(this.todoForm.get("categoryId")?.value),
      title:      this.todoForm.get("title")?.value,
      body:       this.todoForm.get("body")?.value,
      stateCode:  Number(this.todoForm.get("stateCode")?.value),
    }
    this.todoService.updateTodo(this.todo.id, input).subscribe(() => this.router.navigate(['/todo']));
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

  get stateCodeForm() {
    return this.todoForm.get("stateCode");
  }
}

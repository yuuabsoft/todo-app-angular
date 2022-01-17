import {
  Component,
  OnInit
}                        from '@angular/core';
import {TodoService}     from "../../service/todo.service";
import {CategoryService} from "../../service/category.service";
import {
  FormBuilder,
  FormGroup
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
    categoryId: [],
    title:      [],
    body:       [],
    stateCode:  [],
  })

  ngOnInit() {
    this.getTodo();
    this.getCategoryList();
  }

  getTodo(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.todoService.getTodo(id).subscribe(todo => {
      this.todo = todo;
      this.todoForm.patchValue(todo)
    });
  }

  getCategoryList() {
    this.categoryService.getCategoryList().subscribe(categoryList => {
      // カテゴリなしの選択肢を追加
      // TODO: id=valueを空にするためにCategory.idの定義をnullableにしているので別の実装にしたい
      categoryList.push({
        id:        undefined,
        name:      "なし",
        slug:      "",
        colorName: "",
        colorCode: 0
      })
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

}

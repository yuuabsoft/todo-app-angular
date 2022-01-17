import {
  Component,
  OnInit
}                        from '@angular/core';
import {TodoService}     from "../../service/todo.service";
import {Location}        from "@angular/common";
import {
  FormBuilder,
  FormControl,
  FormGroup
}                        from "@angular/forms";
import {Todo}            from "../../model/Todo";
import {TodoAddInput}    from "../../model/TodoAddInput";
import {CategoryService} from "../../service/category.service";
import {Category}        from "../../model/Category";

@Component({
  selector:    'app-todo-add',
  templateUrl: './todo-add.component.html',
  styleUrls:   ['./todo-add.component.scss']
})
export class TodoAddComponent implements OnInit {

  constructor(private todoService: TodoService, private categoryService: CategoryService, private fb: FormBuilder, private location: Location) {
  }

  categoryList: Category[] = [];

  todoForm: FormGroup = this.fb.group({
    categoryId: [null],
    title:      [''],
    body:       [''],
  })

  ngOnInit() {
    this.getCategoryList();
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
    const input: TodoAddInput = {
      categoryId: Number(this.todoForm.get("categoryId")?.value),
      title:      this.todoForm.get("title")?.value,
      body:       this.todoForm.get("body")?.value,
    }
    this.todoService.addTodo(input).subscribe(() => this.goBack());
  }

  goBack() {
    this.location.back();
  }
}

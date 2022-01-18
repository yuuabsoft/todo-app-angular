import {
  Component,
  OnInit
}                         from '@angular/core';
import {CategoryService}  from "../../service/category.service";
import {
  FormBuilder,
  FormGroup,
  Validators
}                         from "@angular/forms";
import {Location}         from "@angular/common";
import {Router}           from "@angular/router";
import {CategoryAddInput} from "../../model/CategoryAddInput";

@Component({
  selector:    'app-category-add',
  templateUrl: './category-add.component.html',
  styleUrls:   ['./category-add.component.scss']
})
export class CategoryAddComponent implements OnInit {

  constructor(private categoryService: CategoryService, private fb: FormBuilder, private location: Location, private router: Router) {
  }

  // TODO: 列挙型は別の場所に定義した方が良い
  colorList = [{
    "code": 1,
    "name": "red"
  }, {
    "code": 2,
    "name": "blue"
  }, {
    "code": 3,
    "name": "green"
  },];

  categoryForm: FormGroup = this.fb.group({
    name:      [undefined, [Validators.required]],
    slug:      [undefined, [Validators.required, Validators.pattern("[a-zA-Z0-9 ]+")]],
    colorCode: [undefined, [Validators.required]],
  })

  ngOnInit() {
  }

  save() {
    const input: CategoryAddInput = {
      name:      this.categoryForm.get("name")?.value,
      slug:      this.categoryForm.get("slug")?.value,
      colorCode: Number(this.categoryForm.get("colorCode")?.value),
    }
    this.categoryService.addCategory(input).subscribe(() => this.router.navigate(['/category']));
  }

  goBack() {
    this.location.back();
  }

  get nameForm() {
    return this.categoryForm.get("name");
  }

  get slugForm() {
    return this.categoryForm.get("slug");
  }

  get colorCodeForm() {
    return this.categoryForm.get("colorCode");
  }
}

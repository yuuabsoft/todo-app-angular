import {
  Component,
  OnInit
}                            from '@angular/core';
import {CategoryService}     from "../../service/category.service";
import {
  FormBuilder,
  FormGroup
}                            from "@angular/forms";
import {Location}            from "@angular/common";
import {
  ActivatedRoute,
  Router
}                            from "@angular/router";
import {CategoryUpdateInput} from "../../model/CategoryUpdateInput";
import {Category}            from "../../model/Category";

@Component({
  selector:    'app-category-update',
  templateUrl: './category-update.component.html',
  styleUrls:   ['./category-update.component.scss']
})
export class CategoryUpdateComponent implements OnInit {

  constructor(private route: ActivatedRoute, private categoryService: CategoryService, private fb: FormBuilder, private location: Location, private router: Router) {
  }

  category: Category | undefined;

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
    name:      [],
    slug:      [],
    colorCode: [],
  })

  ngOnInit() {
    this.getCategory();
  }

  getCategory() {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.categoryService.getCategory(id).subscribe(category => {
      this.category = category;
      this.categoryForm.patchValue(category);
    });
  }

  save() {
    if (!this.category) return;
    const input: CategoryUpdateInput = {
      name:      this.categoryForm.get("name")?.value,
      slug:      this.categoryForm.get("slug")?.value,
      colorCode: Number(this.categoryForm.get("colorCode")?.value),
    }
    this.categoryService.updateCategory(this.category.id, input).subscribe(() => this.router.navigate(['/category']));
  }

  goBack() {
    this.location.back();
  }
}

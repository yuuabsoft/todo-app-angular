import {
  Component,
  OnInit
}                        from '@angular/core';
import {CategoryService} from "../../service/category.service";
import {Category}        from "../../model/Category";

@Component({
  selector:    'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls:   ['./category-list.component.scss']
})
export class CategoryListComponent implements OnInit {

  categoryList: Category[] = [];

  constructor(private categoryService: CategoryService) {
  }

  ngOnInit() {
    this.getCategoryList();
  }

  getCategoryList() {
    this.categoryService.getCategoryList().subscribe(categoryList => {
      this.categoryList = categoryList;
    })
  }

  delete(category: Category) {
    if (category.id == undefined) return;
    this.categoryService.deleteCategory(category.id).subscribe(() => this.getCategoryList());
  }
}

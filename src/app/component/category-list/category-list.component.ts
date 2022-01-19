import {
  Component,
  OnInit
}                               from '@angular/core';
import {CategoryService}        from "../../service/category.service";
import {Category}               from "../../model/Category";
import {MatDialog}              from "@angular/material/dialog";
import {DefaultDialogComponent} from "../default-dialog/default-dialog.component";

@Component({
  selector:    'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls:   ['./category-list.component.scss']
})
export class CategoryListComponent implements OnInit {

  categoryList: Category[] = [];

  constructor(private categoryService: CategoryService, private dialog: MatDialog) {
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
    let dialog = this.dialog.open(DefaultDialogComponent, {
      width: '250px',
      data:  {title: "カテゴリを削除しますか？"}
    });
    dialog.afterClosed().subscribe((result) => {
      if (result) this.categoryService.deleteCategory(category.id).subscribe(() => this.getCategoryList());
    })
  }
}

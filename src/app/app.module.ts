import {NgModule}      from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule}        from './app-routing.module';
import {AppComponent}            from './component/app.component';
import {TodoListComponent}       from './component/todo-list/todo-list.component';
import {
  FormsModule,
  ReactiveFormsModule
}                                from "@angular/forms";
import {HttpClientModule}        from "@angular/common/http";
import {TodoAddComponent}        from './component/todo-add/todo-add.component';
import {TodoUpdateComponent}     from './component/todo-update/todo-update.component';
import {CategoryListComponent}   from './component/category-list/category-list.component';
import {CategoryAddComponent}    from './component/category-add/category-add.component';
import {CategoryUpdateComponent} from './component/category-update/category-update.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatTabsModule}           from "@angular/material/tabs";
import {MatCardModule}           from "@angular/material/card";
import {MatButtonModule}         from "@angular/material/button";
import {MatChipsModule}          from "@angular/material/chips";
import {MatDividerModule}        from "@angular/material/divider";
import {MatToolbarModule}        from "@angular/material/toolbar";
import {MatFormFieldModule}      from "@angular/material/form-field";
import {MatInputModule}          from "@angular/material/input";
import {MatSelectModule}         from "@angular/material/select";
import {MatTableModule}          from "@angular/material/table";
import {
  MAT_SNACK_BAR_DEFAULT_OPTIONS,
  MatSnackBarModule
}                                from "@angular/material/snack-bar";
import {DefaultDialogComponent}  from './component/default-dialog/default-dialog.component';
import {MatDialogModule}         from "@angular/material/dialog";

@NgModule({
  declarations: [AppComponent, TodoListComponent, TodoAddComponent, TodoUpdateComponent, CategoryListComponent, CategoryAddComponent, CategoryUpdateComponent, DefaultDialogComponent],
  imports:      [BrowserModule, AppRoutingModule, FormsModule, HttpClientModule, ReactiveFormsModule, BrowserAnimationsModule, MatTabsModule, MatCardModule, MatButtonModule, MatChipsModule, MatDividerModule, MatToolbarModule, MatFormFieldModule, MatInputModule, MatSelectModule, MatTableModule, MatSnackBarModule, MatDialogModule],
  providers:    [{
    provide:  MAT_SNACK_BAR_DEFAULT_OPTIONS,
    useValue: {duration: 2000}
  }],
  bootstrap:    [AppComponent]
})
export class AppModule {
}

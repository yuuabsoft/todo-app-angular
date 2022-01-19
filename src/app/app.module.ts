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
import {FlashMessagesModule}     from "flash-messages-angular";
import {CategoryListComponent}   from './component/category-list/category-list.component';
import {CategoryAddComponent}    from './component/category-add/category-add.component';
import {CategoryUpdateComponent} from './component/category-update/category-update.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatTabsModule}           from "@angular/material/tabs";

@NgModule({
  declarations: [AppComponent, TodoListComponent, TodoAddComponent, TodoUpdateComponent, CategoryListComponent, CategoryAddComponent, CategoryUpdateComponent],
  imports:      [BrowserModule, AppRoutingModule, FormsModule, HttpClientModule, ReactiveFormsModule, FlashMessagesModule.forRoot(), BrowserAnimationsModule, MatTabsModule],
  providers:    [],
  bootstrap:    [AppComponent]
})
export class AppModule {
}

import {NgModule}      from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule}  from './app-routing.module';
import {AppComponent}      from './component/app.component';
import {TodoListComponent} from './component/todo-list/todo-list.component';
import {
  FormsModule,
  ReactiveFormsModule
}                          from "@angular/forms";
import {
  HttpClient,
  HttpClientModule
}                          from "@angular/common/http";
import {TodoAddComponent}  from './component/todo-add/todo-add.component';

@NgModule({
  declarations: [AppComponent, TodoListComponent, TodoAddComponent],
  imports:      [BrowserModule, AppRoutingModule, FormsModule, HttpClientModule, ReactiveFormsModule],
  providers:    [],
  bootstrap:    [AppComponent]
})
export class AppModule {
}

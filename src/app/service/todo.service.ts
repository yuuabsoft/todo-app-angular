import {Injectable}   from '@angular/core';
import {
  HttpClient,
  HttpHeaders
}                     from "@angular/common/http";
import {
  catchError,
  Observable,
  of,
  tap
}                     from "rxjs";
import {Todo}         from "../model/Todo";
import {TodoAddInput} from "../model/TodoAddInput";

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  constructor(private http: HttpClient) {
  }

  // TODO: environmentsからhosturlとエントリポイントを取得
  private todoUrl = 'http://localhost:9000/api/todo';

  private httpOptions = {
    headers: new HttpHeaders({'Content-Type': 'application/json'})
  };

  getTodoList(): Observable<Todo[]> {
    return this.http.get<Todo[]>(this.todoUrl).pipe(catchError(this.handleError<Todo[]>('getTodoes', [])))
  }

  getTodo(id: number): Observable<Todo> {
    const url = `${this.todoUrl}/${id}`;
    return this.http.get<Todo>(url).pipe(catchError(this.handleError<Todo>('getTodo id=${id}',)));
  }

  addTodo(input: TodoAddInput) {
    console.log(input);
    console.log(JSON.stringify(input));
    return this.http.post(this.todoUrl, input, this.httpOptions).pipe(catchError(this.handleError('addTodo')));
  }

  updateTodo(todo: Todo) {
    return this.http.put(this.todoUrl, todo, this.httpOptions).pipe(catchError(this.handleError<any>('updateTodo')));
  }

  deleteTodo(id: number) {
    const url = `${this.todoUrl}/${id}`;
    return this.http.delete(url, this.httpOptions).pipe(catchError(this.handleError('deleteTodo')));
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: リモート上のロギング基盤にエラーを送信する
      console.error(error); // かわりにconsoleに出力

      // TODO: ユーザーへの開示のためにエラーの変換処理を改善する
      // this.log(`${operation} failed: ${error.message}`);

      // 空の結果を返して、アプリを持続可能にする
      return of(result as T);
    };
  }
}

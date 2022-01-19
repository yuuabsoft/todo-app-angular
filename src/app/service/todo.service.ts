import {Injectable}      from '@angular/core';
import {
  HttpClient,
  HttpHeaders
}                        from "@angular/common/http";
import {
  catchError,
  Observable,
  of,
  tap
}                        from "rxjs";
import {Todo}            from "../model/Todo";
import {TodoAddInput}    from "../model/TodoAddInput";
import {TodoUpdateInput} from "../model/TodoUpdateInput";
import {environment}     from "../../environments/environment";
import {MatSnackBar}     from "@angular/material/snack-bar";

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  constructor(private http: HttpClient, private snackBar: MatSnackBar) {
  }

  private todoUrl = environment.apiUrl + '/api/todo';

  private httpOptions = {
    headers: new HttpHeaders({'Content-Type': 'application/json'})
  };

  getTodoList(): Observable<Todo[]> {
    return this.http.get<Todo[]>(this.todoUrl).pipe(catchError(this.handleError<Todo[]>('Todo取得', [])))
  }

  getTodo(id: number): Observable<Todo> {
    const url = `${this.todoUrl}/${id}`;
    return this.http.get<Todo>(url).pipe(catchError(this.handleError<Todo>('Todo取得',)));
  }

  addTodo(input: TodoAddInput) {
    return this.http.post(this.todoUrl, input, this.httpOptions).pipe(tap(_ => this.log("Todoが追加されました")), catchError(this.handleError('Todo追加')));
  }

  updateTodo(id: number, input: TodoUpdateInput) {
    const url = `${this.todoUrl}/${id}`;
    return this.http.put(url, input, this.httpOptions).pipe(tap(_ => this.log("Todoが更新されました")), catchError(this.handleError<any>('Todo更新')));
  }

  deleteTodo(id: number) {
    const url = `${this.todoUrl}/${id}`;
    return this.http.delete(url, this.httpOptions).pipe(tap(_ => this.log("Todoが削除されました")), catchError(this.handleError('Todo削除')));
  }

  private log(msg: string) {
    this.snackBar.open(msg);
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: リモート上のロギング基盤にエラーを送信する
      console.error(error); // かわりにconsoleに出力

      // TODO: ユーザーへの開示のためにエラーの変換処理を改善する
      this.log(`${operation} が失敗しました: ${error.message}`);

      // 空の結果を返して、アプリを持続可能にする
      return of(result as T);
    };
  }
}

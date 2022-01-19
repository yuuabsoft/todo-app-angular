import {Injectable}          from '@angular/core';
import {
  HttpClient,
  HttpHeaders
}                            from "@angular/common/http";
import {
  catchError,
  Observable,
  of,
  tap
}                            from "rxjs";
import {Category}            from "../model/Category";
import {CategoryAddInput}    from "../model/CategoryAddInput";
import {CategoryUpdateInput} from "../model/CategoryUpdateInput";
import {environment}         from "../../environments/environment";
import {MatSnackBar}         from "@angular/material/snack-bar";

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private http: HttpClient, private snackBar: MatSnackBar) {
  }

  private categoryUrl = environment.apiUrl + '/api/category';

  private httpOptions = {
    headers: new HttpHeaders({'Content-Type': 'application/json'})
  };

  getCategoryList(): Observable<Category[]> {
    return this.http.get<Category[]>(this.categoryUrl).pipe(catchError(this.handleError<Category[]>('カテゴリ取得', [])))
  }

  getCategory(id: number): Observable<Category> {
    const url = `${this.categoryUrl}/${id}`;
    return this.http.get<Category>(url).pipe(catchError(this.handleError<Category>('カテゴリ取得',)));
  }

  addCategory(input: CategoryAddInput) {
    return this.http.post(this.categoryUrl, input, this.httpOptions).pipe(tap(_ => this.log("カテゴリが追加されました")), catchError(this.handleError('カテゴリ追加')));
  }

  updateCategory(id: number, input: CategoryUpdateInput) {
    const url = `${this.categoryUrl}/${id}`;
    return this.http.put(url, input, this.httpOptions).pipe(tap(_ => this.log("カテゴリが更新されました")), catchError(this.handleError<any>('カテゴリ更新')));
  }

  deleteCategory(id: number) {
    const url = `${this.categoryUrl}/${id}`;
    return this.http.delete(url, this.httpOptions).pipe(tap(_ => this.log("カテゴリが削除されました")), catchError(this.handleError('カテゴリ削除')));
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

import {Injectable} from '@angular/core';
import {
  HttpClient,
  HttpHeaders
}                   from "@angular/common/http";
import {
  catchError,
  Observable,
  of,
  tap
}                   from "rxjs";
import {Category}   from "../model/Category";

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private http: HttpClient) {
  }

  // TODO: environmentsからhosturlとエントリポイントを取得
  private categoryUrl = 'http://localhost:9000/api/category';

  private httpOptions = {
    headers: new HttpHeaders({'Content-Type': 'application/json'})
  };

  getCategoryList(): Observable<Category[]> {
    return this.http.get<Category[]>(this.categoryUrl).pipe(catchError(this.handleError<Category[]>('getCategoryList', [])))
  }

  getCategory(id: number): Observable<Category> {
    const url = `${this.categoryUrl}/${id}`;
    return this.http.get<Category>(url).pipe(catchError(this.handleError<Category>('getCategory id=${id}',)));
  }

  addCategory(input: Category) {
    return this.http.post(this.categoryUrl, input, this.httpOptions).pipe(catchError(this.handleError('addCategory')));
  }

  updateCategory(category: Category) {
    return this.http.put(this.categoryUrl, category, this.httpOptions).pipe(catchError(this.handleError<any>('updateCategory')));
  }

  deleteCategory(id: number) {
    const url = `${this.categoryUrl}/${id}`;
    return this.http.delete(url, this.httpOptions).pipe(catchError(this.handleError('deleteCategory')));
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

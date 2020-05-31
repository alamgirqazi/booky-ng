import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { CoreConfig } from "../core.config";
import { HttpClient, HttpParams } from "@angular/common/http";

@Injectable({
  providedIn: "root",
})
export class BooksService {
  constructor(private http: HttpClient) {}

  public findBookByTitle(title): Observable<any> {
    const params = new HttpParams().append("query", title);
    const url = CoreConfig.getPath() + `/books-find`;
    return this.http.get(url, { params });
  }
}

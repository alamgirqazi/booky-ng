import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { CoreConfig } from "../core.config";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root",
})
export class BooksService {
  constructor(private http: HttpClient) {}

  public findBookByTitle(title): Observable<any> {
    // const url = CoreConfig.getPath();
    const url = CoreConfig.getPath() + `/books`;
    return this.http.get(url);
  }
}

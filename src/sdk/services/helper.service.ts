import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { CoreConfig } from "../core.config";
import { HttpClient, HttpParams } from "@angular/common/http";

@Injectable({
  providedIn: "root",
})
export class HelperService {
  constructor(private http: HttpClient) {}

  public userLogin(body): Observable<any> {
    const url = CoreConfig.getPath() + `/users-login`;
    return this.http.post(url, body);
  }
}

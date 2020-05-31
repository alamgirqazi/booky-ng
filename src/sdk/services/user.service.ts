import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { CoreConfig } from "../core.config";
import { HttpClient, HttpParams, HttpHeaders } from "@angular/common/http";

interface LoginBody {
  email: string;
  password: string;
}

interface SignupBody {
  email: string;
  password: string;
}

@Injectable({
  providedIn: "root",
})
export class UserService {
  constructor(private http: HttpClient) {}

  public userLogin(body: LoginBody): Observable<any> {
    const url = CoreConfig.getPath() + `/users-login`;

    return this.http.post(url, body);
  }

  public userSignup(body: SignupBody): Observable<any> {
    const url = CoreConfig.getPath() + `/users-signup`;
    return this.http.post(url, body);
  }
}

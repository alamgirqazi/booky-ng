import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { CoreConfig } from "../core.config";
import { HttpClient, HttpParams, HttpHeaders } from "@angular/common/http";
import { AuthService } from "./auth.service";

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
  constructor(private http: HttpClient, private authService: AuthService) {}

  public userLogin(body: LoginBody): Observable<any> {
    const url = CoreConfig.getPath() + `/users-login`;

    return this.http.post(url, body);
  }

  public userSignup(body: SignupBody): Observable<any> {
    const url = CoreConfig.getPath() + `/users-signup`;
    return this.http.post(url, body);
  }

  addBookToUser(body): Observable<any> {
    const url = CoreConfig.getPath() + `/users-addBook`;
    return this.http.post(url, body);
  }
  getUserBooks(): Observable<any> {
    const token = this.authService.getdecodedAccessTokenId();
    const user_id = token._id;

    const params = new HttpParams().append("user_id", user_id);

    const url = CoreConfig.getPath() + `/users-getBooks`;
    return this.http.get(url, { params });
  }
}

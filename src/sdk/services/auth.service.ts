import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { CoreConfig } from "../core.config";
import { HttpClient, HttpParams } from "@angular/common/http";
import * as decode from "jwt-decode";
import { Router } from "@angular/router";

@Injectable({
  providedIn: "root",
})
export class AuthService {
  constructor(private http: HttpClient, private router: Router) {}
  public getSimpleAccessTokenId() {
    const token = localStorage.getItem("b-token");
    return token;
  }

  public getdecodedAccessTokenId() {
    try {
      const token = localStorage.getItem("b-token");

      return decode(token).data;
    } catch (ex) {
      console.log("ex", ex);
    }
  }

  public logout() {
    this.clearToken();
    this.router.navigateByUrl("/login");
  }

  public saveToken(token) {
    localStorage.setItem("b-token", token);
  }
  public clearToken() {
    localStorage.removeItem("b-token");
  }
}

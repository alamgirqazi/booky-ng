import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { CoreConfig } from "../core.config";
import { HttpClient, HttpParams } from "@angular/common/http";
import * as decode from "jwt-decode";

@Injectable({
  providedIn: "root",
})
export class AuthService {
  constructor(private http: HttpClient) {}
  public getSimpleAccessTokenId() {
    const token = localStorage.getItem("b-token");
    return token;
  }

  public getdecodedAccessTokenId() {
    const token = localStorage.getItem("b-token");
    try {
      return this.decodeToken(token);
    } catch (ex) {
      console.log("ex", ex);
    }
  }

  public decodeToken(token: string) {
    const { payload } = decode(token);
    return payload;
  }

  public saveToken(token) {
    localStorage.setItem("b-token", token);
  }
  public clearToken() {
    localStorage.removeItem("b-token");
  }
}

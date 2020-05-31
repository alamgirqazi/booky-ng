import { CanActivate, Router } from "@angular/router";

import { Injectable } from "@angular/core";
import { AuthService } from "../auth.service";

@Injectable({
  providedIn: "root",
})
export class RedirectLoginGuard implements CanActivate {
  constructor(private router: Router, private authService: AuthService) {}

  canActivate() {
    if (this.authService.getSimpleAccessTokenId()) {
      this.router.navigateByUrl("/home/books");
    } else {
      return true;
    }
  }
}

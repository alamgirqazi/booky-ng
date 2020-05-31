import { CanActivate, Router } from "@angular/router";

import { Injectable } from "@angular/core";
import { AuthService } from "../auth.service";

@Injectable({
  providedIn: "root",
})
export class IsLoginGuard implements CanActivate {
  constructor(private router: Router, private authService: AuthService) {}

  canActivate() {
    if (!this.authService.getSimpleAccessTokenId()) {
      this.router.navigateByUrl("/login");
    } else {
      return true;
    }
  }
}

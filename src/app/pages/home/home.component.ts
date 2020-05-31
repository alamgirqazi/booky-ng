import { Component, OnInit } from "@angular/core";
import { AuthService } from "src/sdk/services/auth.service";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"],
})
export class HomeComponent implements OnInit {
  constructor(private authService: AuthService) {}
  isCollapsed = false;
  username;

  ngOnInit(): void {
    const token = this.authService.getdecodedAccessTokenId();
    console.log("token", token);
    this.username = token.email;
  }
  logout() {
    this.authService.logout();
  }
}

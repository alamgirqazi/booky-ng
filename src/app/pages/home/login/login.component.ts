import { Component, OnInit } from "@angular/core";
import {
  Validators,
  FormGroup,
  AbstractControl,
  FormBuilder,
} from "@angular/forms";
import { Subscription } from "rxjs";
import { Router } from "@angular/router";
import { UserService } from "src/sdk/services/user.service";
import { HelperService } from "src/sdk/services/helper.service";
import { AuthService } from "src/sdk/services/auth.service";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.scss"],
})
export class LoginComponent implements OnInit {
  constructor(
    private userService: UserService,
    private router: Router,
    private authService: AuthService,
    private fb: FormBuilder,
    private helperService: HelperService
  ) {}
  user = {
    username: null,
    password: null,
    rememberMe: false,
  };
  rememberMe = false;
  messages = [];
  errors = [];
  showMessages;
  submitted = false;
  formSubmit = false;
  loading = false;
  private index: number = 0;
  isLoading = false;
  loginForm: FormGroup;
  secretNumber = null;
  secretArray = [];
  wrongTries = 0;
  sub: Subscription;

  ngOnInit() {
    this.loginForm = this.fb.group({
      email: [
        null,
        [Validators.required, Validators.email, Validators.minLength(6)],
      ],
      password: [null, [Validators.required, Validators.minLength(6)]],
    });
  }

  submitForm(): void {
    for (const i in this.loginForm.controls) {
      if (i) {
        this.loginForm.controls[i].markAsDirty();
        this.loginForm.controls[i].updateValueAndValidity();
      }
    }
  }

  login() {
    this.submitForm();
    if (this.loginForm.valid) {
      this.loading = true;
      const body = this.loginForm.value;
      this.userService.userLogin(body).subscribe(
        (response) => {
          const token = response.token;
          this.authService.saveToken(token);
          this.router.navigateByUrl("home/books");

          this.helperService.createMessage("success", "Login successful!");

          this.loading = false;
        },
        (error) => {
          console.log("error", error);
          const errorMsg =
            error?.error?.message ||
            "Could not login. Please check your internet";
          this.helperService.createMessage("error", errorMsg);

          this.loading = false;
        }
      );
    }
  }
}

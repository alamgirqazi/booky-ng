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

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.scss"],
})
export class LoginComponent implements OnInit {
  constructor(
    private userService: UserService,
    private router: Router,
    private fb: FormBuilder
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
          const tokenData = response.token;
          // this.authService.saveToken(response.tokenId, tokenData);

          this.router.navigateByUrl("home/books");

          this.showToast("Log in successfully");

          this.loading = false;
        },
        (error) => {
          console.log("error", error);
          const errorMsg =
            error?.error?.message ||
            "Could not login. Please check your internet";
          this.showToast(errorMsg, "error");

          this.loading = false;
        }
      );
    }
  }

  showToast(msg, status = "success") {
    if (status == "success") {
      //   this.toastrService.success(msg, "Success");
      // } else {
      //   this.toastrService.danger(msg, "Error");
    }
  }
}

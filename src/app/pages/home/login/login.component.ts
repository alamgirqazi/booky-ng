import { Component, OnInit } from "@angular/core";
import {
  Validators,
  FormGroup,
  AbstractControl,
  FormBuilder,
} from "@angular/forms";
import { Subscription } from "rxjs";
import { Router } from "@angular/router";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.scss"],
})
export class LoginComponent implements OnInit {
  constructor(
    // private authService: AuthService,
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
      username: [null, [Validators.required, Validators.minLength(6)]],
      password: [null, [Validators.required, Validators.minLength(6)]],
      // robot: [false, [Validators.required, Validators.requiredTrue]],
      // secretNumber: [
      //   null,
      //   [Validators.required, this.validateSecretNumber.bind(this)],
      // ],
      // remember: [true],
    });
  }
  numberOnly(event) {
    // return this.helperService.numberOnly(event);
  }

  validateSecretNumber(control: AbstractControl) {
    if (control.value == this.secretNumber) {
      return null;
    } else {
      return { secretNumber: true };
    }
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
      const { username, password } = this.loginForm.value;
      // this.authService.login(username, password).subscribe(
      //   (response) => {
      //     const tokenData = response.token;
      //     tokenData["all_allowed_isps"] = response["allowed_isps"];
      //     tokenData["isp_info"] = response["isp_info"];
      //     this.authService.saveToken(response.tokenId, tokenData);
      //     this.authService.savePreferences(response.preferences);

      //     if (response.token.role_type === "superadmin") {
      //       this.router.navigateByUrl("su/tickets");
      //     } else {
      //       this.router.navigateByUrl("pages/dashboard");
      //     }
      //     this.showToast("Log in successfully");

      //     this.loading = false;
      //   },
      //   (error) => {
      //     console.log("error", error);
      //     const errorMsg =
      //       error?.error?.message ||
      //       "Could not login. Please check your internet";
      //     this.showToast(errorMsg, "error");

      //     this.loading = false;
      //   }
      // );
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

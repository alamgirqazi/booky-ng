import { Component, OnInit } from "@angular/core";
import {
  FormBuilder,
  Validators,
  FormGroup,
  AbstractControl,
} from "@angular/forms";
import { AuthService } from "src/sdk/services/auth.service";
import { HelperService } from "src/sdk/services/helper.service";
import { UserService } from "src/sdk/services/user.service";
import { Router } from "@angular/router";
import { Subscription } from "rxjs";

@Component({
  selector: "app-signup",
  templateUrl: "./signup.component.html",
  styleUrls: ["./signup.component.scss"],
})
export class SignupComponent implements OnInit {
  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private helperService: HelperService,
    private userService: UserService,
    private router: Router
  ) {}
  signupForm: FormGroup;
  loading = false;

  ngOnInit() {
    this.signupForm = this.fb.group({
      name: [null, [Validators.required]],
      email: [
        null,
        [Validators.required, Validators.email, Validators.minLength(6)],
      ],
      password: [null, [Validators.required, Validators.minLength(6)]],
      confirm_password: [
        null,
        [
          Validators.required,
          Validators.minLength(6),
          this.matchOtherValidator("password"),
        ],
      ],
    });
  }
  matchOtherValidator(otherControlName: string) {
    return (control: AbstractControl): { [key: string]: any } => {
      const otherControl: AbstractControl = control.root.get(otherControlName);

      if (otherControl) {
        const subscription: Subscription = otherControl.valueChanges.subscribe(
          () => {
            control.updateValueAndValidity();
            subscription.unsubscribe();
          }
        );
      }

      return otherControl && control.value !== otherControl.value
        ? { match: true }
        : null;
    };
  }
  submitForm(): void {
    for (const i in this.signupForm.controls) {
      if (i) {
        this.signupForm.controls[i].markAsDirty();
        this.signupForm.controls[i].updateValueAndValidity();
      }
    }
  }

  signup() {
    this.submitForm();
    if (this.signupForm.valid) {
      this.loading = true;
      const body = this.signupForm.value;
      this.userService.userSignup(body).subscribe(
        (response) => {
          const token = response.token;
          this.authService.saveToken(token);
          this.router.navigateByUrl("home/books");

          this.helperService.createMessage("success", "Signup successful!");

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

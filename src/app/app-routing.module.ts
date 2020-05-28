import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { LandingPageComponent } from "./pages/home/landingpage/landingpage.component";
import { LoginComponent } from "./pages/home/login/login.component";
import { SignupComponent } from "./pages/home/signup/signup.component";

const routes: Routes = [
  // { path: "", pathMatch: "full", redirectTo: "/home" },
  { path: "", component: LandingPageComponent },
  { path: "login", component: LoginComponent },
  { path: "signup", component: SignupComponent },
  {
    path: "home",
    loadChildren: () =>
      import("./pages/home/home.module").then((m) => m.HomeModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

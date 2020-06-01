import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { RedirectLoginGuard } from "src/sdk/services/guards/redirectlogin.guard";
import { IsLoginGuard } from "src/sdk/services/guards/islogin.guard";
import { LandingPageComponent } from "./pages/landingpage/landingpage.component";
import { LoginComponent } from "./pages/login/login.component";
import { SignupComponent } from "./pages/signup/signup.component";

const routes: Routes = [
  // { path: "", pathMatch: "full", redirectTo: "/home" },
  { path: "", component: LandingPageComponent },
  {
    path: "login",
    component: LoginComponent,
    canActivate: [RedirectLoginGuard],
  },
  {
    path: "signup",
    component: SignupComponent,
    canActivate: [RedirectLoginGuard],
  },
  {
    path: "home",
    loadChildren: () =>
      import("./pages/home/home.module").then((m) => m.HomeModule),
    canActivate: [IsLoginGuard],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

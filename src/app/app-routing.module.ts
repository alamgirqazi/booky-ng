import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { LandingPageComponent } from "./pages/home/landingpage/landingpage.component";

const routes: Routes = [
  // { path: "", pathMatch: "full", redirectTo: "/home" },
  { path: "", component: LandingPageComponent },
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

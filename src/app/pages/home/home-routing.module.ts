import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { HomeComponent } from "./home.component";
import { HomeSearchComponent } from "./home-search/home-search.component";
import { HomeBoardComponent } from "./home-board/home-board.component";
import { HomeAnalyticsComponent } from "./home-analytics/home-analytics.component";
import { HomeSettingsComponent } from "./home-settings/home-settings.component";
import { HomeBooksComponent } from "./home-books/home-books.component";

const routes: Routes = [
  {
    path: "",
    component: HomeComponent,
    children: [
      { path: "books", component: HomeBooksComponent },
      { path: "search", component: HomeSearchComponent },
      { path: "board", component: HomeBoardComponent },
      { path: "analytics", component: HomeAnalyticsComponent },
      { path: "settings", component: HomeSettingsComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomeRoutingModule {}

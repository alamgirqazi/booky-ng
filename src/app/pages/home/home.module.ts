import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { HomeComponent } from "./home.component";
import { RouterModule } from "@angular/router";
import { NzLayoutModule } from "ng-zorro-antd/layout";
import { NzMenuModule } from "ng-zorro-antd/menu";
import { IconsProviderModule } from "./../../icons-provider.module";
import { HomeRoutingModule } from "./home-routing.module";
import { HomeSearchComponent } from "./home-search/home-search.component";
import { NzPageHeaderModule } from "ng-zorro-antd/page-header";
import { NzGridModule } from "ng-zorro-antd/grid";
import { NzInputModule } from "ng-zorro-antd/input";
import { FormsModule } from "@angular/forms";
import { NzButtonModule } from "ng-zorro-antd/button";
import { SharedModule } from "src/app/sharedmodule/shared.module";
import { HomeBoardComponent } from "./home-board/home-board.component";
import { HomeAnalyticsComponent } from "./home-analytics/home-analytics.component";
import { HomeSettingsComponent } from "./home-settings/home-settings.component";
import { HomeBooksComponent } from "./home-books/home-books.component";
import { DragDropModule } from "@angular/cdk/drag-drop";
import { NzDropDownModule } from "ng-zorro-antd/dropdown";

@NgModule({
  declarations: [
    HomeComponent,
    HomeSearchComponent,
    HomeBoardComponent,
    HomeAnalyticsComponent,
    HomeSettingsComponent,
    HomeBooksComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    NzLayoutModule,
    NzButtonModule,
    // NzDropDownModule,
    FormsModule,
    DragDropModule,
    NzMenuModule,
    NzGridModule,
    NzInputModule,
    IconsProviderModule,
    NzPageHeaderModule,

    HomeRoutingModule,
  ],
})
export class HomeModule {}

import { NgModule } from "@angular/core";

import { NzLayoutModule } from "ng-zorro-antd/layout";
import { NzMenuModule } from "ng-zorro-antd/menu";
import { NzCardModule } from "ng-zorro-antd/card";
import { FormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";
import { BookCardComponent } from "./components/book-card/book-card.component";
import { NzRateModule } from "ng-zorro-antd/rate";

@NgModule({
  declarations: [BookCardComponent],
  imports: [
    CommonModule,
    FormsModule,
    NzLayoutModule,
    NzMenuModule,
    NzCardModule,
    NzRateModule,
  ],
  exports: [BookCardComponent],
})
export class SharedModule {}

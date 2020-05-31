import { NgModule } from "@angular/core";

import { NzLayoutModule } from "ng-zorro-antd/layout";
import { NzMenuModule } from "ng-zorro-antd/menu";
import { NzCardModule } from "ng-zorro-antd/card";
import { FormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";
import { BookCardComponent } from "./components/book-card/book-card.component";
import { NzRateModule } from "ng-zorro-antd/rate";
import { NzDropDownModule } from "ng-zorro-antd/dropdown";
import { NzSwitchModule } from "ng-zorro-antd/switch";
import { NzAvatarModule } from "ng-zorro-antd/avatar";

@NgModule({
  declarations: [BookCardComponent],
  imports: [
    CommonModule,
    FormsModule,
    NzLayoutModule,
    NzMenuModule,
    NzCardModule,
    NzSwitchModule,
    NzRateModule,
    NzDropDownModule,
    NzAvatarModule,
  ],
  exports: [BookCardComponent, NzDropDownModule, NzAvatarModule],
})
export class SharedModule {}

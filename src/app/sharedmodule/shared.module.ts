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
import { NzRadioModule } from "ng-zorro-antd/radio";
import { NzBadgeModule } from "ng-zorro-antd/badge";
import { NzResultModule } from "ng-zorro-antd/result";
import { NzSkeletonModule } from "ng-zorro-antd/skeleton";
import { NzModalModule } from "ng-zorro-antd/modal";
import { NzDatePickerModule } from "ng-zorro-antd/date-picker";
import { NzGridModule } from "ng-zorro-antd/grid";
import { NzTimelineModule } from "ng-zorro-antd/timeline";

@NgModule({
  declarations: [BookCardComponent],
  imports: [
    CommonModule,
    FormsModule,
    NzGridModule,
    NzLayoutModule,
    NzMenuModule,
    NzCardModule,
    NzSwitchModule,
    NzRateModule,
    NzRadioModule,
    NzDropDownModule,
    NzAvatarModule,
    NzBadgeModule,
    NzResultModule,
    NzDatePickerModule,
    NzModalModule,
    NzSkeletonModule,
    NzTimelineModule,
  ],
  exports: [
    BookCardComponent,
    NzDropDownModule,
    NzAvatarModule,
    NzModalModule,
    NzRadioModule,
    NzBadgeModule,
    NzSkeletonModule,
    NzResultModule,
  ],
})
export class SharedModule {}

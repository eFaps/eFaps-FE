import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";

import { PageWrapperComponent } from "./page-wrapper/page-wrapper.component";
import { WicketRoutingModule } from "./wicket-routing.module";

@NgModule({
  declarations: [PageWrapperComponent],
  imports: [CommonModule, WicketRoutingModule],
})
export class WicketModule {}

import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { WicketRoutingModule } from "./wicket-routing.module";
import { PageWrapperComponent } from "./page-wrapper/page-wrapper.component";

@NgModule({
  declarations: [PageWrapperComponent],
  imports: [CommonModule, WicketRoutingModule]
})
export class WicketModule {}

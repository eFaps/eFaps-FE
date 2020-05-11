import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { ContentRoutingModule } from "./content-routing.module";
import { LayoutComponent } from "./layout/layout.component";
import { MatTabsModule } from "@angular/material/tabs";

@NgModule({
  declarations: [LayoutComponent],
  imports: [CommonModule, ContentRoutingModule, MatTabsModule]
})
export class ContentModule {}

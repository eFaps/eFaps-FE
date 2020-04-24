import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { MatGridListModule } from "@angular/material/grid-list";

import { FormComponent } from "./form/form.component";
import { LayoutRoutingModule } from "./layout-routing.module";
import { LayoutComponent } from "./layout.component";

@NgModule({
  declarations: [LayoutComponent, FormComponent],
  imports: [CommonModule, LayoutRoutingModule, MatGridListModule],
})
export class LayoutModule {}

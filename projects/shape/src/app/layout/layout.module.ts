import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { LayoutRoutingModule } from "./layout-routing.module";
import { LayoutComponent } from "./layout.component";
import { FormComponent } from './form/form.component';

@NgModule({
  declarations: [LayoutComponent, FormComponent],
  imports: [CommonModule, LayoutRoutingModule],
})
export class LayoutModule {}

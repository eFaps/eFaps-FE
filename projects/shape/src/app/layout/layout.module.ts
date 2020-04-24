import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { MatGridListModule } from "@angular/material/grid-list";

import { ValuesModule } from "../values/values.module";
import { FormComponent } from "./form/form.component";
import { LayoutRoutingModule } from "./layout-routing.module";
import { LayoutComponent } from "./layout.component";
import { TileComponent } from "./tile/tile.component";

@NgModule({
  declarations: [LayoutComponent, FormComponent, TileComponent],
  imports: [CommonModule, LayoutRoutingModule, MatGridListModule, ValuesModule],
})
export class LayoutModule {}

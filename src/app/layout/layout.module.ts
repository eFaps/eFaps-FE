import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { MatGridListModule } from "@angular/material/grid-list";
import { TableModule } from "primeng/table";

import { ValuesModule } from "../values/values.module";
import { ContentComponent } from "./content/content.component";
import { FormComponent } from "./form/form.component";
import { HeadingComponent } from "./heading/heading.component";
import { LayoutRoutingModule } from "./layout-routing.module";
import { LayoutComponent } from "./layout.component";
import { TableComponent } from "./table/table.component";
import { TileComponent } from "./tile/tile.component";

@NgModule({
  declarations: [
    LayoutComponent,
    FormComponent,
    TileComponent,
    ContentComponent,
    TableComponent,
    HeadingComponent,
  ],
  imports: [
    CommonModule,
    LayoutRoutingModule,
    MatGridListModule,
    ValuesModule,
    TableModule,
  ],
})
export class LayoutModule {}

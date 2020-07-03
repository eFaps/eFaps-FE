import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { MatButtonModule } from "@angular/material/button";
import { MatIconModule } from "@angular/material/icon";
import { TableModule as PTableModule } from "primeng/table";

import { MenuModule } from "../menu/menu.module";
import { SharedModule } from '../shared/shared.module';
import { TableRoutingModule } from "./table-routing.module";
import { TableComponent } from "./table/table.component";

@NgModule({
  declarations: [TableComponent],
  imports: [
    CommonModule,
    TableRoutingModule,
    PTableModule,
    MatButtonModule,
    MatIconModule,
    MenuModule,
    SharedModule,
  ],
})
export class TableModule {}

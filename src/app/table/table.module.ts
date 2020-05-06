import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { TableRoutingModule } from "./table-routing.module";
import { TableComponent } from "./table/table.component";
import { TableModule as PTableModule } from "primeng/table";

@NgModule({
  declarations: [TableComponent],
  imports: [CommonModule, TableRoutingModule, PTableModule],
})
export class TableModule {}

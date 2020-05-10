import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import {MatButtonModule} from '@angular/material/button';
import { TableModule as PTableModule } from "primeng/table";

import { TableRoutingModule } from "./table-routing.module";
import { TableComponent } from "./table/table.component";
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  declarations: [TableComponent],
  imports: [CommonModule, TableRoutingModule, PTableModule, MatButtonModule, MatIconModule],
})
export class TableModule {}

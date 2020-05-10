import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { TableResolverService } from "../services";
import { TableComponent } from "./table/table.component";

const routes: Routes = [
  {
    path: "",
    component: TableComponent,
    resolve: {
      table: TableResolverService,
    },
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TableRoutingModule {}

import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { MatTabsModule } from "@angular/material/tabs";
import { TableModule } from "primeng/table";

import { ValuesModule } from "../values/values.module";
import { ContentRoutingModule } from "./content-routing.module";
import { FormComponent } from "./form/form.component";
import { LayoutComponent } from "./layout/layout.component";
import { OutlineComponent } from "./outline/outline.component";
import { TableComponent } from "./table/table.component";
import { HeadingComponent } from './heading/heading.component';

@NgModule({
  declarations: [
    LayoutComponent,
    FormComponent,
    OutlineComponent,
    TableComponent,
    HeadingComponent
  ],
  imports: [
    CommonModule,
    ContentRoutingModule,
    MatTabsModule,
    ValuesModule,
    TableModule
  ]
})
export class ContentModule {}
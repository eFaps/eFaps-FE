import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from "@angular/material/icon";
import { TableModule } from "primeng/table";

import { ValuesModule } from "../values/values.module";
import { FormSectionComponent } from "./form-section/form-section.component";
import { HeadingSectionComponent } from "./heading-section/heading-section.component";
import { TableSectionComponent } from "./table-section/table-section.component";

@NgModule({
  declarations: [
    FormSectionComponent,
    TableSectionComponent,
    HeadingSectionComponent
  ],
  imports: [
    CommonModule,
    ValuesModule,
    ReactiveFormsModule,
    TableModule,
    MatIconModule,
    MatButtonModule,
  ],
  exports: [
    FormSectionComponent,
    TableSectionComponent,
    HeadingSectionComponent
  ]
})
export class SectionsModule {}

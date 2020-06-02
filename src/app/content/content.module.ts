import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { ContentRoutingModule } from "./content-routing.module";
import { LayoutComponent } from "./layout/layout.component";
import { MatTabsModule } from "@angular/material/tabs";
import { FormComponent } from './form/form.component';
import { OutlineComponent } from './outline/outline.component';
import { ValuesModule } from '../values/values.module';

@NgModule({
  declarations: [LayoutComponent, FormComponent, OutlineComponent],
  imports: [CommonModule, ContentRoutingModule, MatTabsModule, ValuesModule]
})
export class ContentModule {}

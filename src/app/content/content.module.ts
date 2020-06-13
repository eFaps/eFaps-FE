import { DragDropModule } from "@angular/cdk/drag-drop";
import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { MatIconModule } from "@angular/material/icon";
import { MatListModule } from "@angular/material/list";
import { MatSidenavModule } from "@angular/material/sidenav";
import { MatTabsModule } from "@angular/material/tabs";
import { TableModule } from "primeng/table";

import { MenuModule } from '../menu/menu.module';
import { SectionsModule } from '../sections/sections.module';
import { ValuesModule } from "../values/values.module";
import { ContentRoutingModule } from "./content-routing.module";
import { HeadingComponent } from "./heading/heading.component";
import { LayoutComponent } from "./layout/layout.component";
import { OutlineComponent } from "./outline/outline.component";

@NgModule({
  declarations: [
    LayoutComponent,
    OutlineComponent,
    HeadingComponent
  ],
  imports: [
    CommonModule,
    ContentRoutingModule,
    MatTabsModule,
    ValuesModule,
    TableModule,
    MatSidenavModule,
    MatIconModule,
    DragDropModule,
    MatListModule,
    SectionsModule,
    MenuModule,
  ]
})
export class ContentModule {}

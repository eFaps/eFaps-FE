import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { MatButtonModule } from "@angular/material/button";
import { MatIconModule } from "@angular/material/icon";
import { MatMenuModule } from "@angular/material/menu";
import { MatToolbarModule } from "@angular/material/toolbar";

import { CoreRoutingModule } from "./core-routing.module";
import { LayoutComponent } from "./layout/layout.component";
import { MenuItemComponent } from "./menu-item/menu-item.component";
import { TopNavComponent } from "./top-nav/top-nav.component";

@NgModule({
  declarations: [LayoutComponent, TopNavComponent, MenuItemComponent],
  imports: [
    CommonModule,
    CoreRoutingModule,
    MatToolbarModule,
    MatMenuModule,
    MatButtonModule,
    MatIconModule
  ],
  exports: [LayoutComponent]
})
export class CoreModule {}

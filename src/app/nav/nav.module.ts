import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { MatButtonModule } from "@angular/material/button";
import { MatMenuModule } from "@angular/material/menu";
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatIconModule } from "@angular/material/icon";

import { CardinalComponent } from "./cardinal/cardinal.component";
import { NavRoutingModule } from "./nav-routing.module";
import { MenuItemComponent } from './menu-item/menu-item.component';
import { ContentWrapperComponent } from './content-wrapper/content-wrapper.component';

@NgModule({
  declarations: [CardinalComponent, MenuItemComponent, ContentWrapperComponent],
  imports: [
    CommonModule,
    NavRoutingModule,
    MatToolbarModule,
    MatMenuModule,
    MatButtonModule,
    MatIconModule,
  ]
})
export class NavModule {}

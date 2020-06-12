import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { MatMenuModule } from "@angular/material/menu";

import { MenuItemComponent } from "./menu-item/menu-item.component";
import { MenuComponent } from "./menu/menu.component";
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [MenuComponent, MenuItemComponent],
  imports: [CommonModule, MatMenuModule, MatIconModule, MatButtonModule],
  exports: [MenuComponent]
})
export class MenuModule {}

import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { MatButtonModule } from "@angular/material/button";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatIconModule } from "@angular/material/icon";
import { MatInputModule } from "@angular/material/input";
import { MatMenuModule } from "@angular/material/menu";
import { MatToolbarModule } from "@angular/material/toolbar";

import { CoreRoutingModule } from "./core-routing.module";
import { LayoutComponent } from "./layout/layout.component";
import { MenuItemComponent } from "./menu-item/menu-item.component";
import { SearchComponent } from "./search/search.component";
import { TopNavComponent } from "./top-nav/top-nav.component";
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    LayoutComponent,
    TopNavComponent,
    MenuItemComponent,
    SearchComponent
  ],
  imports: [
    CommonModule,
    CoreRoutingModule,
    MatToolbarModule,
    MatMenuModule,
    MatButtonModule,
    MatIconModule

  ]
})
export class CoreModule {}

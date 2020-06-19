import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { MatButtonModule } from "@angular/material/button";
import { MatIconModule } from "@angular/material/icon";
import { MatMenuModule } from "@angular/material/menu";
import { MatToolbarModule } from "@angular/material/toolbar";
import { AngularSvgIconModule } from "angular-svg-icon";

import { CoreRoutingModule } from "./core-routing.module";
import { HistoryComponent } from "./history/history.component";
import { LayoutComponent } from "./layout/layout.component";
import { MenuItemComponent } from "./menu-item/menu-item.component";
import { SearchRestoreComponent } from "./search-restore/search-restore.component";
import { SearchComponent } from "./search/search.component";
import { TopNavComponent } from "./top-nav/top-nav.component";

@NgModule({
  declarations: [
    LayoutComponent,
    TopNavComponent,
    MenuItemComponent,
    SearchComponent,
    SearchRestoreComponent,
    HistoryComponent,
  ],
  imports: [
    CommonModule,
    CoreRoutingModule,
    MatToolbarModule,
    MatMenuModule,
    MatButtonModule,
    MatIconModule,
    AngularSvgIconModule.forRoot(),
  ],
})
export class CoreModule {}

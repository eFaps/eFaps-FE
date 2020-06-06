import { DragDropModule } from "@angular/cdk/drag-drop";
import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { MatButtonModule } from "@angular/material/button";
import { MatDialogModule } from "@angular/material/dialog";
import { MatIconModule } from "@angular/material/icon";
import { MatMenuModule } from "@angular/material/menu";

import { SearchDialogComponent } from "./search-dialog/search-dialog.component";
import { SubMenuComponent } from './sub-menu/sub-menu.component';

@NgModule({
  declarations: [SearchDialogComponent, SubMenuComponent],
  imports: [
    CommonModule,
    MatDialogModule,
    MatButtonModule,
    DragDropModule,
    MatIconModule,
    MatMenuModule
  ],
  entryComponents: [SearchDialogComponent]
})
export class SearchModule {}

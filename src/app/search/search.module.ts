import { DragDropModule } from '@angular/cdk/drag-drop';
import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { MatButtonModule } from "@angular/material/button";
import { MatDialogModule } from "@angular/material/dialog";
import { MatIconModule } from '@angular/material/icon';

import { SearchDialogComponent } from "./search-dialog/search-dialog.component";

@NgModule({
  declarations: [SearchDialogComponent],
  imports: [CommonModule, MatDialogModule, MatButtonModule, DragDropModule, MatIconModule],
  entryComponents: [SearchDialogComponent]
})
export class SearchModule {}

import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { MatButtonModule } from "@angular/material/button";
import { MatDialogModule } from "@angular/material/dialog";

import { SectionsModule } from "../sections/sections.module";
import { ModalComponent } from "./modal/modal.component";

@NgModule({
  declarations: [ModalComponent],
  imports: [CommonModule, SectionsModule, MatDialogModule, MatButtonModule],
  entryComponents: [ModalComponent],
})
export class ModalModule {}

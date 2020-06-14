import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { SectionsModule } from '../sections/sections.module';
import { ModalComponent } from './modal/modal.component';

@NgModule({
  declarations: [ModalComponent],
  imports: [
    CommonModule,
    SectionsModule,
  ],
  entryComponents: [ModalComponent]
})
export class ModalModule { }

import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { ValuesModule } from '../values/values.module';
import { FormSectionComponent } from './form-section/form-section.component';

@NgModule({
  declarations: [FormSectionComponent],
  imports: [
    CommonModule,
    ValuesModule,
  ],
  exports: [FormSectionComponent]
})
export class SectionsModule { }

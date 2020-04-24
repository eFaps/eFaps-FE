import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";

import { ValueDirective } from "../services/value.directive";
import { ReadOnlyValueComponent } from "./read-only-value/read-only-value.component";
import { ValueContainerComponent } from "./value-container/value-container.component";

@NgModule({
  declarations: [
    ValueContainerComponent,
    ReadOnlyValueComponent,
    ValueDirective,
  ],
  imports: [CommonModule],
  exports: [ValueContainerComponent],
})
export class ValuesModule {}

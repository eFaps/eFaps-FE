import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { MatInputModule } from "@angular/material/input";

import { ValueDirective } from "../services/value.directive";
import { InputValueComponent } from "./input-value/input-value.component";
import { ReadOnlyValueComponent } from "./read-only-value/read-only-value.component";
import { ValueContainerComponent } from "./value-container/value-container.component";

@NgModule({
  declarations: [
    ValueContainerComponent,
    ReadOnlyValueComponent,
    ValueDirective,
    InputValueComponent
  ],
  imports: [CommonModule, MatInputModule],
  exports: [ValueContainerComponent]
})
export class ValuesModule {}

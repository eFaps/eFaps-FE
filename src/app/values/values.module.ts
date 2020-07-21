import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";
import { MatAutocompleteModule } from "@angular/material/autocomplete";
import { MatInputModule } from "@angular/material/input";
import { MatRadioModule } from "@angular/material/radio";
import { MatSelectModule } from "@angular/material/select";
import { NgxFileUploadCoreModule } from "@ngx-file-upload/core";
import { NgxDropzoneModule } from "ngx-dropzone";

import { ValueDirective } from "../services/value.directive";
import { EnumValueComponent } from "./enum-value/enum-value.component";
import { FileUploadValueComponent } from "./file-upload-value/file-upload-value.component";
import { InputValueComponent } from "./input-value/input-value.component";
import { RadioValueComponent } from "./radio-value/radio-value.component";
import { ReadOnlyValueComponent } from "./read-only-value/read-only-value.component";
import { SnippletValueComponent } from "./snipplet-value/snipplet-value.component";
import { StatusValueComponent } from "./status-value/status-value.component";
import { ValueContainerComponent } from "./value-container/value-container.component";
import { AutocompleteValueComponent } from './autocomplete-value/autocomplete-value.component';

@NgModule({
  declarations: [
    ValueContainerComponent,
    ReadOnlyValueComponent,
    ValueDirective,
    InputValueComponent,
    SnippletValueComponent,
    FileUploadValueComponent,
    EnumValueComponent,
    StatusValueComponent,
    RadioValueComponent,
    AutocompleteValueComponent
  ],
  imports: [
    CommonModule,
    MatInputModule,
    ReactiveFormsModule,
    NgxDropzoneModule,
    NgxFileUploadCoreModule,
    MatRadioModule,
    MatSelectModule,
    MatAutocompleteModule
  ],
  exports: [ValueContainerComponent]
})
export class ValuesModule {}

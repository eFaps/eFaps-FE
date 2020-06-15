import { Value } from "./value";
import { FormGroup } from "@angular/forms";

export interface ValueComponent {
  value: Value;
  formGroup: FormGroup;
}

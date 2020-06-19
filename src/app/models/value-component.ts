import { FormGroup } from "@angular/forms";

import { Value } from "./value";

export interface ValueComponent {
  value: Value;
  formGroup: FormGroup;
}

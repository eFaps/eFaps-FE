import { Type } from "@angular/core";

export interface Value {
  component: Type<any>;
  label: string;
  value: any;
}

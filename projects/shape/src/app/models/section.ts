import { Heading } from "./heading";
import { Value } from "./value";

export interface Section {
  type: "FORM" | "TABLE";
}

export interface FormSection extends Section {
  type: "FORM";
  items: Array<Value | Value[] | Heading>;
}

export interface TableSection extends Section {
  type: "TABLE";
  heading?: Heading;
}

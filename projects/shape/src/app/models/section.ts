import { Heading } from "./heading";
import { Value } from "./value";
import { Column } from './column';

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
  columns: Column[];
  values: any[];
}

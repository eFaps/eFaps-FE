import { Column } from "./column";
import { Heading } from "./heading";
import { Value } from "./value";

export interface Section {
  type: "FORM" | "TABLE" | "HEADING";
}

export interface FormSection extends Section {
  type: "FORM";
  items: Array<Value | Value[] | Heading>;
}

export interface TableSection extends Section {
  type: "TABLE";
  columns: Column[];
  values: any[];
}

export interface HeadingSection extends Section {
  type: "HEADING";
  header: string;
  level: number;
}

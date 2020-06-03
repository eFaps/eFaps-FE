import { Heading } from "./heading";
import { Value } from "./value";
import { Column } from "./column";

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

export interface HeadingSection {
  type: "HEADING";
  header: string;
  level: number;
}

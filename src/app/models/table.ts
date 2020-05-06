import { Column } from "./column";

export interface Table {
  header: string;
  columns: Column[];
  values: any[];
}

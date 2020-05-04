import { Value } from "./value";

export interface Tile {
  id: string;
  colspan: number;
  rowspan: number;
  values: Value[];
}

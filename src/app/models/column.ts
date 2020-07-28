import { ValueType } from './value';

export interface Column {
  header: string;
  field: string;
  ref: string;
  type?: ValueType;
}

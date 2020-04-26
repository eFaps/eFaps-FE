import { Value } from './value';

export interface Section {
  type: 'FORM' | 'TABLE';
}


export interface FormSection extends Section {
  type: 'FORM';
  values: Array<Value | Value[]>
}

export interface TableSection extends Section {
  type: 'TABLE';
}

export interface Value {
  type: ValueType;
  name: string;
  label: string;
  value: any;
}
export enum ValueType {
  READ_ONLY = "READ_ONLY",
  INPUT = "INPUT"
}

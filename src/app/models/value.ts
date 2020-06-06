export interface Value {
  type: ValueType;
  label: string;
  value: any;
}
export enum ValueType {
  READ_ONLY = "READ_ONLY",
  INPUT = "INPUT"
}

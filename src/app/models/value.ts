export interface Value {
  type: ValueType;
  label: string;
  value: any;
}
enum ValueType {
  READ_ONLY,
}

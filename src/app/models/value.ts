export interface Value {
  type: ValueType;
  name: string;
  label: string;
  value: any;
  options?: Option[];
}

export enum ValueType {
  READ_ONLY = "READ_ONLY",
  INPUT = "INPUT",
  SNIPPLET = "SNIPPLET",
  UPLOAD = "UPLOAD",
  UPLOADMULTIPLE = "UPLOADMULTIPLE",
  ENUM = "ENUM",
  STATUS = "STATUS",
  RADIO = "RADIO"
}

export interface Option {
  label: string;
  value: string;
}

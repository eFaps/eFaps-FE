export interface Value {
  type: ValueType;
  name: string;
  label: string;
  value: any;
  options?: Option[];
  ref?: string;
}

export enum ValueType {
  AUTOCOMPLETE = "AUTOCOMPLETE",
  DATE = "DATE",
  ENUM = "ENUM",
  INPUT = "INPUT",
  RADIO = "RADIO",
  READ_ONLY = "READ_ONLY",
  SNIPPLET = "SNIPPLET",
  STATUS = "STATUS",
  UPLOAD = "UPLOAD",
  UPLOADMULTIPLE = "UPLOADMULTIPLE",
}

export interface Option {
  label: string;
  value: string;
}

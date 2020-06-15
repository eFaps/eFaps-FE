import { FormSection } from "./section";

export interface Search {
  id: string;
  label: string;
  selected: boolean;
  children: Search[];
  formSection: FormSection;
}

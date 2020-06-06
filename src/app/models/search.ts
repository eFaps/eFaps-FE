import { FormSection } from './section';

export interface Search {
  label: string;
  selected: boolean;
  children: Search[];
  formSection: FormSection;
}

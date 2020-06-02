import { FormSection, TableSection } from './section';

export interface Outline {
  oid: string;
  header: string;
  sections: Array<FormSection | TableSection>;
}

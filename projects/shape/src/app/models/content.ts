import { FormSection, TableSection } from './section';

export interface Content {
  sections: Array<FormSection | TableSection>
}

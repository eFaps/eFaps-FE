import { FormSection, TableSection } from "./section";
import { NavItem } from './nav-item';

export interface Outline {
  oid: string;
  menu: NavItem[];
  header: string;
  sections: Array<FormSection | TableSection>;
}

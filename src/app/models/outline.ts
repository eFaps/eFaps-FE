import { FormSection, TableSection } from "./section";
import { NavItem, Action } from "./nav-item";

export interface Outline {
  oid: string;
  menu: NavItem[];
  header: string;
  sections: Array<FormSection | TableSection>;
  action: Action;
}

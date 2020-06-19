import { Action, NavItem } from "./nav-item";
import { FormSection, TableSection } from "./section";

export interface Outline {
  oid: string;
  menu: NavItem[];
  header: string;
  sections: Array<FormSection | TableSection>;
  action: Action;
}

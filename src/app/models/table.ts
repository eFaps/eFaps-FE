import { Column } from "./column";
import { NavItem } from './nav-item';

export interface Table {
  menu: NavItem[];
  header: string;
  columns: Column[];
  values: any[];
}

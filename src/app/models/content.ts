import { NavItem } from './nav-item';
import { Outline } from './outline';

export interface Content {
  nav: NavItem[];
  selected: string;
  outline: Outline
}

export interface NavItem {
  id: string;
  label: string;
  children?: NavItem[];
  action?: Action;
  icon?: String;
}

export interface Action {
  type: ActionType;
  label?: string;
  verify?: Verify;
}

export interface Verify {
  question?: string;
  selectedRows?: number;
}

export enum ActionType {
  DASHBOARD = "DASHBOARD",
  GRID = "GRID",
  FORM = "FORM",
  SEARCH = "SEARCH",
  MODAL = "MODAL",
  EXEC = "EXEC"
}

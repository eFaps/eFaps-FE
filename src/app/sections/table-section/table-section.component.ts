import { Component, Input, OnInit } from "@angular/core";
import { TableSection, Value, Column } from "../../models";
import { FormGroup } from "@angular/forms";

@Component({
  selector: "eFaps-table-section",
  templateUrl: "./table-section.component.html",
  styleUrls: ["./table-section.component.scss"]
})
export class TableSectionComponent implements OnInit {
  _section: TableSection;
  _formGroup: FormGroup;
  values = [];
  columns = [];
  constructor() {}

  ngOnInit(): void {}

  @Input()
  set section(section: TableSection) {
    this._section = section;
    this.columns = section.columns;
    this.values = section.values;
  }

  get section(): TableSection {
    return this._section;
  }

  @Input()
  set formGroup(formGroup: FormGroup) {
    this._formGroup = formGroup;
  }

  get formGroup() {
    return this._formGroup;
  }

  add() {
    this.values.push({});
  }

  remove(index: number) {
    this.values.splice(index, 1);
  }

  getValue(column: Column, val: any): Value {
    return {
      type: column.type,
      label: null,
      name: column.field,
      value: val,
      ref: column.ref
    };
  }
}

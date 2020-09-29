import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";
import { FormGroup } from "@angular/forms";

import { Column, TableSection, Value } from "../../models";

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
  @Output() opened = new EventEmitter<string>();

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

  open(column: Column, value: any): void {
    var ref = value[`${column.field}_AOID`];
    if (ref) {
    } else {
      ref = value["OID"];
    }
    this.opened.emit(ref);
  }
}

import { Component, Input, OnInit } from "@angular/core";

import { TableSection } from "../../models";

@Component({
  selector: "eFaps-table",
  templateUrl: "./table.component.html",
  styleUrls: ["./table.component.scss"],
})
export class TableComponent implements OnInit {
  _section: TableSection;
  constructor() {}

  ngOnInit(): void {}

  @Input()
  set section(section: TableSection) {
    this._section = section;
  }

  get section(): TableSection {
    return this._section;
  }
}

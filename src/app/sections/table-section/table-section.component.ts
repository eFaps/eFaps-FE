import { Component, OnInit, Input } from "@angular/core";
import { TableSection } from "src/app/models";

@Component({
  selector: "eFaps-table-section",
  templateUrl: "./table-section.component.html",
  styleUrls: ["./table-section.component.scss"],
})
export class TableSectionComponent implements OnInit {
  _section: TableSection;
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
}

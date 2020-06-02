import { Component, OnInit, Input } from '@angular/core';
import { TableSection } from 'src/app/models';

@Component({
  selector: 'eFaps-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {
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

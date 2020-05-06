import { Component, OnInit } from "@angular/core";
import { Column, Table } from "src/app/models";
import { TableService } from "src/app/services";
import { Location } from "@angular/common";

@Component({
  selector: "eFaps-table",
  templateUrl: "./table.component.html",
  styleUrls: ["./table.component.scss"],
})
export class TableComponent implements OnInit {
  columns: Column[] = [];
  values = [];
  id: string;

  table: Table;
  constructor(private tableService: TableService, private location: Location) {}

  ngOnInit(): void {
    this.id = (<any>this.location.getState()).id;

    this.tableService.getTable(this.id).subscribe({
      next: (table) => {
        console.log(table);
        this.table = table;
        this.columns = table.columns;
      },
    });
  }
}

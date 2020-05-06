import { Component, OnInit } from "@angular/core";
import { Column, Table } from "src/app/models";
import { TableService } from "src/app/services";
import { Location } from "@angular/common";
import { LazyLoadEvent } from "primeng/api/lazyloadevent";

@Component({
  selector: "eFaps-table",
  templateUrl: "./table.component.html",
  styleUrls: ["./table.component.scss"]
})
export class TableComponent implements OnInit {
  columns: Column[] = [];
  values = [];
  id: string;
  table: Table;
  totalRecords: number;
  loading: boolean;
  constructor(private tableService: TableService, private location: Location) {}

  ngOnInit(): void {
    this.id = (<any>this.location.getState()).id;
    this.loading = true;
    this.tableService.getTable(this.id).subscribe({
      next: table => {
        console.log(table);
        this.table = table;
        this.columns = table.columns;
        this.values = table.values.slice(1, 100);
        this.totalRecords = table.values.length;
        this.loading = false;
      }
    });
  }

  loadDataOnScroll(event: LazyLoadEvent) {
    if (this.table) {
      setTimeout(() => {
        this.loading = true;
        this.values = this.table.values.slice(event.first, event.first + event.rows);
        this.loading = false;
      });
    }
  }
}

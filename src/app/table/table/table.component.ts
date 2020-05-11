import { Component, OnInit } from "@angular/core";
import { Column, Table } from "src/app/models";
import { LazyLoadEvent } from "primeng/api/lazyloadevent";
import { ActivatedRoute, Router } from "@angular/router";

@Component({
  selector: "eFaps-table",
  templateUrl: "./table.component.html",
  styleUrls: ["./table.component.scss"],
})
export class TableComponent implements OnInit {
  columns: Column[] = [];
  values = [];
  multiSortMeta = [];
  id: string;
  _table: Table;
  totalRecords: number;
  loading: boolean;
  virtualScroll = true;
  isLazy = true;
  constructor(
    private router: Router,
    private route: ActivatedRoute,
  ) {
    this.route.data.subscribe({
      next: (value) => {
        this.table = value.table;
      },
    });
  }

  set table(table: Table) {
    this._table = table;
    this.columns = table.columns;
    this.totalRecords = table.values.length;
    if (this.totalRecords > 500) {
      this.values = table.values.slice(1, 100);
      this.isLazy = true;
      this.virtualScroll = true;
    } else {
      this.values = table.values;
      this.isLazy = false;
      this.virtualScroll = false;
    }
    this.loading = false;
  }

  get table(): Table {
    return this._table;
  }

  ngOnInit(): void {}

  loadDataOnScroll(event: LazyLoadEvent) {
    if (this.table) {
      setTimeout(() => {
        this.loading = true;
        var end = event.first + event.rows;
        end = end < this.totalRecords - 1 ? end : this.totalRecords - 1;
        this.values = this.table.values.slice(event.first, end);
        this.loading = false;
      }, 250);
    }
  }

  open(column: Column, value: any): void {
    var ref = value[`${column.field}_AOID`]
    if (ref) {
      console.log(ref)
    } else {
      ref = value["OID"]
      console.log(ref)
    }

    this.router
      .navigate(["ui", { outlets: { layoutoutlet: null } }])
      .then(() => {
        this.router.navigate(
          ["ui", { outlets: { layoutoutlet: ["content"] } }],
          {
            skipLocationChange: true,
            replaceUrl: false,
            queryParams: {
              id: ref
            },
            state: { id: ref },
          }
        );
      });

  }
}

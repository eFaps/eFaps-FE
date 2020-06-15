import { Component, OnInit } from "@angular/core";
import { Column, Table, NavItem, ActionType } from "src/app/models";
import { LazyLoadEvent } from "primeng/api/lazyloadevent";
import { ActivatedRoute, Router } from "@angular/router";
import { MatDialog } from "@angular/material/dialog";
import { ModalComponent } from "src/app/modal/modal/modal.component";

@Component({
  selector: "eFaps-table",
  templateUrl: "./table.component.html",
  styleUrls: ["./table.component.scss"]
})
export class TableComponent implements OnInit {
  menu: NavItem[];
  columns: Column[] = [];
  values = [];
  multiSortMeta = [];
  id: string;
  _table: Table;
  totalRecords: number;
  loading: boolean;
  virtualScroll = true;
  isLazy = true;
  selectionMode: string = null;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    public dialog: MatDialog
  ) {
    this.route.data.subscribe({
      next: value => {
        this.table = value.table;
      }
    });
    route.queryParams.subscribe({
      next: params => {
        this.id = params["id"];
      }
    });
  }

  set table(table: Table) {
    this._table = table;
    this.menu = table.menu;
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
    this.selectionMode = table.selectionMode;
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
    var ref = value[`${column.field}_AOID`];
    if (ref) {
      console.log(ref);
    } else {
      ref = value["OID"];
      console.log(ref);
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
            state: { id: ref }
          }
        );
      });
  }

  onAction(item: NavItem) {
    if (item.action) {
      switch (item.action.type) {
        case ActionType.MODAL:
          const dialogRef = this.dialog.open(ModalComponent, {
            data: {
              navItem: item
            },
            disableClose: true
          });
          dialogRef.afterClosed().subscribe({
            next: result => {
              this.router
                .navigate(["ui", { outlets: { layoutoutlet: null } }])
                .then(() => {
                  this.router.navigate(
                    ["ui", { outlets: { layoutoutlet: ["table"] } }],
                    {
                      skipLocationChange: true,
                      replaceUrl: false,
                      queryParams: {
                        id: this.id
                      },
                      state: { id: this.id }
                    }
                  );
                });
            }
          });
          break;
      }
    }
  }
}

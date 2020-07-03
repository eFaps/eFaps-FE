import { Component, OnInit } from "@angular/core";
import { MatDialog } from "@angular/material/dialog";
import { ActivatedRoute, Router } from "@angular/router";
import { LazyLoadEvent } from "primeng/api/lazyloadevent";
import { combineLatest, Observable } from "rxjs";

import { ModalComponent } from "../../modal/modal/modal.component";
import { ActionType, Column, NavItem, Table } from "../../models";
import { ExecService, HistoryService } from "../../services";
import { ConfirmDialogComponent } from "../../shared/confirm-dialog/confirm-dialog.component";

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
  selection: any;
  history = false;

  constructor(
    private router: Router,
    private historyService: HistoryService,
    private execService: ExecService,
    private dialog: MatDialog,
    route: ActivatedRoute
  ) {
    combineLatest(route.queryParams, route.data).subscribe({
      next: values => {
        this.id = values[0]["id"];
        this.history = "history" in values[0] ? values[0]["history"] : false;
        this.table = values[1].table;
        if (!this.history) {
          this.historyService.register({
            id: this.id,
            label: this.table.header
          });
        }
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
              this.reload();
            }
          });
          break;
        case ActionType.EXEC:
          this.verify(item).subscribe({
            next: result => {
              if (result) {
                let oids = Array<String>();
                if (Array.isArray(this.selection)) {
                  (<any[]>this.selection).forEach(v => {
                    oids.push(v.OID);
                  });
                }
                this.execService
                  .execute(item.id, { eFapsSelectedOids: oids })
                  .subscribe({
                    next: () => {
                      this.reload();
                    }
                  });
              }
            }
          });
          break;
      }
    }
  }

  reload() {
    this.router
      .navigate(["ui", { outlets: { layoutoutlet: null } }])
      .then(() => {
        this.router.navigate(["ui", { outlets: { layoutoutlet: ["table"] } }], {
          skipLocationChange: true,
          replaceUrl: false,
          queryParams: {
            id: this.id
          },
          state: { id: this.id }
        });
      });
  }

  verify(item: NavItem): Observable<Boolean> {
    if (item.action.verify) {
      const dialogRef = this.dialog.open(ConfirmDialogComponent, {
        data: item.action.verify
      });
      return dialogRef.afterClosed();
    }
    return new Observable<Boolean>(subscriber => {
      subscriber.next(true);
    });
  }
}

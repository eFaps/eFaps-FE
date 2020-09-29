import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { MatDialog, MatDialogRef } from "@angular/material/dialog";
import { BehaviorSubject, Observable } from "rxjs";

import { NavItem, Search, TableSection } from "../models";
import { SearchDialogComponent } from "../search/search-dialog/search-dialog.component";
import { first } from "rxjs/operators";

@Injectable({
  providedIn: "root"
})
export class SearchService {
  private searchSource = new BehaviorSubject<Search>(null);
  currentSearch = this.searchSource.asObservable();

  private restoreableSource = new BehaviorSubject<any>(null);
  restoreable = this.restoreableSource.asObservable();

  constructor(private http: HttpClient, public dialog: MatDialog) {}

  search(item: NavItem): any {
    var dialogRef = this.dialog.openDialogs.find(dialogRef => {
      return dialogRef.id == "SearchDialog";
    });

    if (dialogRef) {
    } else {
      dialogRef = this.dialog.open(SearchDialogComponent, {
        hasBackdrop: false,
        id: "SearchDialog",
        data: {
          currentSearch: this.currentSearch,
          service: this
        }
      });
      this.afterClosed(dialogRef);
    }
    this.getSearch(item).subscribe({
      next: search => this.searchSource.next(search)
    });
  }

  public getSearch(item: NavItem): Observable<Search> {
    const requestUrl = `../rest/ui/search/${item.id}`;
    return this.http.get<Search>(requestUrl);
  }

  public restore() {
    this.restoreable.pipe(first()).subscribe({
      next: content => {
        console.log(content);
        var dialogRef = this.dialog.open(SearchDialogComponent, {
          hasBackdrop: false,
          id: "SearchDialog",
          data: {
            service: this,
            restorable: content
          }
        });
        this.afterClosed(dialogRef);
      }
    });
    this.restoreableSource.next(null);
  }

  private afterClosed(matDialogRef: MatDialogRef<any, any>) {
    matDialogRef.afterClosed().subscribe({
      next: restorable => {
        if (restorable) {
          this.restoreableSource.next(restorable);
        } else {
          this.restoreableSource.next(null);
        }
      }
    });
  }

  public query(id: string, data: any): Observable<TableSection> {
    const requestUrl = `../rest/ui/search/${id}/query`;
    return this.http.get<TableSection>(requestUrl, { params: data });
  }
}

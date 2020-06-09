import { Injectable } from "@angular/core";
import { MatDialog } from "@angular/material/dialog";
import { NavItem, Search, TableSection } from "../models";
import { SearchDialogComponent } from "../search/search-dialog/search-dialog.component";
import { Observable, BehaviorSubject } from "rxjs";
import { HttpClient } from "@angular/common/http";

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
      dialogRef.afterClosed().subscribe({
        next: restorable => {
          if (restorable) {
            this.restoreableSource.next({});
          } else {
            this.restoreableSource.next(null);
          }
        }
      });
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
    this.restoreableSource.next(null);
    var dialogRef = this.dialog.open(SearchDialogComponent, {
      hasBackdrop: false,
      id: "SearchDialog",
      data: {
        currentSearch: this.currentSearch,
        service: this
      }
    });
    dialogRef.afterClosed().subscribe({
      next: restorable => {
        if (restorable) {
          this.restoreableSource.next({});
        } else {
          this.restoreableSource.next(null);
        }
      }
    });
  }

  public query(id: string, data: any): Observable<TableSection>  {
    const requestUrl = `../rest/ui/search/${id}/query`;
    return this.http.get<TableSection>(requestUrl, { params: data });
  }
}

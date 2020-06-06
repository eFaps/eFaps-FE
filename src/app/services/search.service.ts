import { Injectable } from "@angular/core";
import { MatDialog } from "@angular/material/dialog";
import { NavItem, Search } from "../models";
import { SearchDialogComponent } from "../search/search-dialog/search-dialog.component";
import { Observable, BehaviorSubject } from "rxjs";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root"
})
export class SearchService {
  private searchSource = new BehaviorSubject<Search>(null);
  currentSearch = this.searchSource.asObservable();

  constructor(private http: HttpClient, public dialog: MatDialog) {}

  search(item: NavItem): any {
    var dialogRef = this.dialog.openDialogs.find(dialogRef => {
      return dialogRef.id == "SearchDialog";
    });

    if (dialogRef) {
    } else {
      dialogRef = this.dialog.open(SearchDialogComponent, {
        hasBackdrop: false,
        id: "SearchDialog"
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
}

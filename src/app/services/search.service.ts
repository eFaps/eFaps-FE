import { Injectable } from "@angular/core";
import { MatDialog } from "@angular/material/dialog";
import { NavItem } from "../models";
import { SearchDialogComponent } from "../search/search-dialog/search-dialog.component";
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: "root"
})
export class SearchService {
  constructor(public dialog: MatDialog) {}

  search(item: NavItem): any {
    var dialogRef = this.dialog.openDialogs.find(dialogRef => {
      return dialogRef.id == "SearchDialog";
    });

    if (dialogRef) {
    } else {
      dialogRef = this.dialog.open(SearchDialogComponent, {
        hasBackdrop: false,
        id: "SearchDialog",

      });
    }
  }
}

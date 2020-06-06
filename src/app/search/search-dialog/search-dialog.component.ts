import { Component, Inject, OnInit } from "@angular/core";
import { MAT_DIALOG_DATA, MatDialogRef } from "@angular/material/dialog";
import { Search } from "src/app/models";

@Component({
  selector: "eFaps-search-dialog",
  templateUrl: "./search-dialog.component.html",
  styleUrls: ["./search-dialog.component.scss"]
})
export class SearchDialogComponent implements OnInit {
  searchItems: Search[] = [];
  currentSearch: Search;
  constructor(
    @Inject(MAT_DIALOG_DATA) private data: any,
    private dialogRef: MatDialogRef<SearchDialogComponent>
  ) {}

  ngOnInit(): void {
    this.data.currentSearch.subscribe({
      next: searchItems => {
        if (searchItems) {
          this.searchItems = searchItems;
          this.currentSearch = this.evalCurrent(searchItems);
        }
      }
    });
  }

  evalCurrent(searchItems: Search[]): Search {
    let ret;
    for (let item of searchItems) {
      if (item.selected) {
        ret = item;
        break;
      } else {
        ret = this.evalCurrent(item.children);
        if (ret) {
          break;
        }
      }
    }
    return ret;
  }

  hide() {
    this.dialogRef.close(true)
  }

  setCurrent(searchItem: Search) {
    this.currentSearch = searchItem
  }
}

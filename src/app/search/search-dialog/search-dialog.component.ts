import { Component, OnInit, Inject } from "@angular/core";
import { Search } from "src/app/models";
import { MAT_DIALOG_DATA } from "@angular/material/dialog";

@Component({
  selector: "eFaps-search-dialog",
  templateUrl: "./search-dialog.component.html",
  styleUrls: ["./search-dialog.component.scss"]
})
export class SearchDialogComponent implements OnInit {
  searchItems: Search[] = [];
  currentSearch: Search;
  constructor(@Inject(MAT_DIALOG_DATA) private data: any) {}

  ngOnInit(): void {
    this.data.currentSearch.subscribe({
      next: searchItems => {
        if (searchItems) {
          this.searchItems = searchItems;
          this.currentSearch = this.evalCurrent(searchItems)
        }
      }
    });
  }

  evalCurrent(searchItems: Search[]): Search {
    let ret;
    for(let item of searchItems) {
      if (item.selected) {
        ret = item
        break;
      } else {
        ret = this.evalCurrent(item.children)
        if (ret) {
          break
        }
      }
    }
    return ret
  }
}

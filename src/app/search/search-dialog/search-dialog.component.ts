import { Component, Inject, OnInit } from "@angular/core";
import { FormBuilder, FormGroup } from "@angular/forms";
import { MAT_DIALOG_DATA, MatDialogRef } from "@angular/material/dialog";
import { Router } from '@angular/router';
import { Search, TableSection } from "src/app/models";
import { SearchService } from "src/app/services/search.service";

@Component({
  selector: "eFaps-search-dialog",
  templateUrl: "./search-dialog.component.html",
  styleUrls: ["./search-dialog.component.scss"]
})
export class SearchDialogComponent implements OnInit {
  searchItems: Search[] = [];
  currentSearch: Search;
  formGroup: FormGroup;
  tableSection: TableSection;
  showResult = false;

  searchService: SearchService;
  constructor(
    private router: Router,
    @Inject(MAT_DIALOG_DATA) private data: any,
    private dialogRef: MatDialogRef<SearchDialogComponent>,
    formBuilder: FormBuilder
  ) {
    this.formGroup = formBuilder.group([]);
  }

  ngOnInit(): void {
    this.searchService = this.data.service;
    if (this.data.restorable) {
      this.searchItems = this.data.restorable.searchItems;
      this.currentSearch = this.data.restorable.currentSearch;
      this.tableSection = this.data.restorable.tableSection;
      this.showResult = this.tableSection != null;
    } else {
      this.data.currentSearch.subscribe({
        next: searchItems => {
          if (searchItems) {
            this.searchItems = searchItems;
            this.currentSearch = this.evalCurrent(searchItems);
          }
        }
      });
    }
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
    this.dialogRef.close({
      searchItems: this.searchItems,
      currentSearch: this.currentSearch,
      tableSection: this.showResult ? this.tableSection : null
    });
  }

  setCurrent(searchItem: Search) {
    this.currentSearch = searchItem;
    this.showResult = false;
  }

  query() {
    this.searchService
      .query(this.currentSearch.id, this.formGroup.value)
      .subscribe({
        next: tableSection => {
          this.tableSection = tableSection;
          this.showResult = true;
        }
      });
  }

  back() {
    this.showResult = false;
  }

  open(oid: string) {
    this.router
      .navigate(["ui", { outlets: { layoutoutlet: null } }])
      .then(() => {
        this.router.navigate(
          ["ui", { outlets: { layoutoutlet: ["content"] } }],
          {
            skipLocationChange: true,
            replaceUrl: false,
            queryParams: {
              id: oid
            },
            state: { id: oid }
          }
        );
        this.hide();
      });
  }
}

import { Component, OnInit } from "@angular/core";
import { SearchService } from '../../services/search.service';

@Component({
  selector: "eFaps-search-restore",
  templateUrl: "./search-restore.component.html",
  styleUrls: ["./search-restore.component.scss"],
})
export class SearchRestoreComponent implements OnInit {
  restoreInfo: any;
  constructor(private searchService: SearchService) {}

  ngOnInit(): void {
    this.searchService.restoreable.subscribe({
      next: (restoreInfo) => {
        this.restoreInfo = restoreInfo;
      },
    });
  }

  show(): boolean {
    return this.restoreInfo != null;
  }

  restore() {
    this.searchService.restore();
  }
}

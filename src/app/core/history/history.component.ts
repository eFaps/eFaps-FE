import { Component, OnInit } from "@angular/core";

import { HistoryEntry } from "../../models/history-entry";
import { HistoryService } from "../../services/history.service";

@Component({
  selector: "eFaps-history",
  templateUrl: "./history.component.html",
  styleUrls: ["./history.component.scss"]
})
export class HistoryComponent implements OnInit {
  entries: HistoryEntry[] = [];
  constructor(private historyService: HistoryService) {}

  ngOnInit(): void {
    this.historyService.currentEntries.subscribe({
      next: entries => {
        if (entries) {
          this.entries = entries.reverse();
        }
      }
    });
  }

  get hasPrevious(): boolean {
    return this.historyService.prevEntries.length > 0;
  }

  get hasNext(): boolean {
    return this.historyService.nextEntries.length > 0;
  }

  previous() {
    this.historyService.previous();
  }

  next() {
    this.historyService.next();
  }
}

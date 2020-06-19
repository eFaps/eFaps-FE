import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { HistoryService } from "src/app/services/history.service";

@Component({
  selector: "eFaps-history",
  templateUrl: "./history.component.html",
  styleUrls: ["./history.component.scss"],
})
export class HistoryComponent implements OnInit {
  constructor(private router: Router, private historyService: HistoryService) {}

  ngOnInit(): void {}

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

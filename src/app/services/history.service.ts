import { Injectable } from "@angular/core";
import { Router } from "@angular/router";

import { HistoryEntry } from "../models/history-entry";

@Injectable({
  providedIn: "root"
})
export class HistoryService {
  prevEntries: HistoryEntry[] = [];
  nextEntries: HistoryEntry[] = [];
  current: HistoryEntry;

  constructor(private router: Router) {}

  register(entry: HistoryEntry): any {
    if (this.current) {
      this.prevEntries.push(this.current);
    }
    this.current = entry;
    this.nextEntries = [];
  }

  previous() {
    const prev = this.prevEntries.pop();
    this.nextEntries.push(this.current);
    this.current = prev;
    this.nav(prev);
  }

  next(): any {
    const next = this.nextEntries.pop();
    this.prevEntries.push(this.current);
    this.current = next;
    this.nav(next);
  }

  nav(entry: HistoryEntry) {
    if (entry.oid) {
      this.router
        .navigate(["ui", { outlets: { layoutoutlet: null } }])
        .then(() => {
          this.router.navigate(
            ["ui", { outlets: { layoutoutlet: ["content"] } }],
            {
              skipLocationChange: true,
              replaceUrl: false,
              queryParams: {
                id: entry.oid,
                history: true
              },
              state: { id: entry.oid }
            }
          );
        });
    } else {
      this.router
        .navigate(["ui", { outlets: { layoutoutlet: null } }])
        .then(() => {
          this.router.navigate(
            ["ui", { outlets: { layoutoutlet: ["table"] } }],
            {
              skipLocationChange: true,
              replaceUrl: false,
              queryParams: {
                id: entry.id,
                history: true
              },
              state: { id: entry.id }
            }
          );
        });
    }
  }
}

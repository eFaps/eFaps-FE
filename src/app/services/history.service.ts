import { Injectable } from "@angular/core";
import { Router } from "@angular/router";

import { HistoryEntry } from "../models/history-entry";
import { BehaviorSubject } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class HistoryService {
  prevEntries: HistoryEntry[] = [];
  nextEntries: HistoryEntry[] = [];
  current: HistoryEntry;

  private entrySource = new BehaviorSubject<HistoryEntry[]>(null);
  currentEntries = this.entrySource.asObservable();

  constructor(private router: Router) {}

  register(entry: HistoryEntry): any {
    if (this.current) {
      this.prevEntries.push(this.current);
      this.checkPrevEntries();
    }
    this.current = entry;
    this.nextEntries = [];
  }

  previous() {
    const prev = this.prevEntries.pop();
    this.checkPrevEntries();
    this.nextEntries.push(this.current);
    this.current = prev;
    this.nav(prev);
  }

  next(): any {
    const next = this.nextEntries.pop();
    this.prevEntries.push(this.current);
    this.checkPrevEntries();
    this.current = next;
    this.nav(next);
  }

  checkPrevEntries() {
    while (this.prevEntries.length > 10) {
      this.prevEntries.shift()
    }
    this.entrySource.next(this.prevEntries);
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

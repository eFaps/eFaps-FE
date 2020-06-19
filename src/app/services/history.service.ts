import { Injectable } from "@angular/core";

import { HistoryEntry } from '../models/history-entry';

@Injectable({
  providedIn: "root",
})
export class HistoryService {
  entries: HistoryEntry[] = []
  constructor() {}

  register(entry: HistoryEntry): any {
    console.log(entry);
    this.entries.push(entry)
  }
}

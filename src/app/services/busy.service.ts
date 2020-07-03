import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class BusyService {
  private busySource = new BehaviorSubject<boolean>(false);
  isBusy = this.busySource.asObservable();
  constructor() {}

  start() {
    this.busySource.next(true);
  }
  stop() {
    this.busySource.next(false);
  }
}

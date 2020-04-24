import { BehaviorSubject } from "rxjs";
import { Injectable } from "@angular/core";
import { Layout } from "../models/layout";

@Injectable({
  providedIn: "root",
})
export class LayoutService {
  private layoutSource = new BehaviorSubject<Layout>(null);
  currentLayout = this.layoutSource.asObservable();

  constructor() {}

  public loadLayout() {
    const layout = {
      columns: 2,
      tiles:[
        {
          id: "tile1.1",
          colspan: 1,
          rowspan: 1
        },
        {
          id: "tile1.2",
          colspan: 1,
          rowspan: 1
        }
      ]
    };
    this.layoutSource.next(layout);
  }
}

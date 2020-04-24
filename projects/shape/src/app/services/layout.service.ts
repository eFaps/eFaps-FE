import { BehaviorSubject } from "rxjs";
import { Injectable } from "@angular/core";
import { Layout } from "../models/layout";
import { ReadOnlyValueComponent } from "../values/read-only-value/read-only-value.component";

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
      tiles: [
        {
          id: "tile1.1",
          colspan: 1,
          rowspan: 1,
          values: [
            {
              component: ReadOnlyValueComponent,
              label: "Name",
              value: "Administrator",
            },
            {
              component: ReadOnlyValueComponent,
              label: "UUID",
              value: "1b182945-8136-4d42-bf61-d0c4a323a13d",
            },
            {
              component: ReadOnlyValueComponent,
              label: "Remark",
              value: "1",
            },
            {
              component: ReadOnlyValueComponent,
              label: "Status",
              value: "active",
            },

            {
              component: ReadOnlyValueComponent,
              label: "Last Name",
              value: "Administrator",
            },
            {
              component: ReadOnlyValueComponent,
              label: "First Name",
              value: "The",
            },
            {
              component: ReadOnlyValueComponent,
              label: "Timezone",
              value: " America/Lima",
            },
            {
              component: ReadOnlyValueComponent,
              label: "Calendar",
              value: "ISO8601 Java calendar system",
            },
          ],
        },
        {
          id: "tile1.2",
          colspan: 1,
          rowspan: 1,
          values: [],
        },
      ],
    };
    this.layoutSource.next(layout);
  }
}

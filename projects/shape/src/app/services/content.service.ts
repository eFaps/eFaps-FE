import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";
import { Content } from "../models/content";
import { ReadOnlyValueComponent } from "../values/read-only-value/read-only-value.component";

@Injectable({
  providedIn: "root"
})
export class ContentService {
  private contentSource = new BehaviorSubject<Content>(null);
  currentContent = this.contentSource.asObservable();
  constructor() {}

  public loadContent(id: number) {
    switch (id) {
      case 1:
        this.contentSource.next(layout2);
        break;
    }
  }
}

const layout2: Content = {
  sections: [
    {
      type: "FORM",
      values: [
        {
          component: ReadOnlyValueComponent,
          label: "Type",
          value: "Person"
        },
        {
          component: ReadOnlyValueComponent,
          label: "Name",
          value: "Administrator"
        },
        {
          component: ReadOnlyValueComponent,
          label: "UUID",
          value: "1b182945-8136-4d42-bf61-d0c4a323a13d"
        },
        {
          component: ReadOnlyValueComponent,
          label: "Revision",
          value: "--"
        },
        {
          component: ReadOnlyValueComponent,
          label: "Remark",
          value: "1"
        },
        {
          component: ReadOnlyValueComponent,
          label: "Status",
          value: "active"
        },
        {
          component: ReadOnlyValueComponent,
          label: "Date of Last Login",
          value: "8 jul 2017 10:44:06 "
        },
        [
          {
            component: ReadOnlyValueComponent,
            label: "Creator",
            value: "Administrator, The"
          },
          {
            component: ReadOnlyValueComponent,
            label: "Created",
            value: "22 jun 2012 11:46:13"
          }
        ],
        [
          {
            component: ReadOnlyValueComponent,
            label: "Last Modifier",
            value: "Administrator, The"
          },
          {
            component: ReadOnlyValueComponent,
            label: "Last Modified",
            value: "5 jun 2019 13:28:38"
          }
        ],
        {
          component: ReadOnlyValueComponent,
          label: "Last Name",
          value: "Administrator"
        },
        {
          component: ReadOnlyValueComponent,
          label: "First Name",
          value: "The"
        },
        {
          component: ReadOnlyValueComponent,
          label: "Timezone",
          value: " America/Lima"
        },
        {
          component: ReadOnlyValueComponent,
          label: "Calendar",
          value: "ISO8601 Java calendar system"
        },
        {
          component: ReadOnlyValueComponent,
          label: "Language",
          value: "es"
        }
      ]
    },
    {
      type: "TABLE"
    },
    {
      type: "TABLE"
    },
    {
      type: "TABLE"
    }
  ]
};

import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";

import { Content } from "../models/content";
import { ReadOnlyValueComponent } from "../values/read-only-value/read-only-value.component";

@Injectable({
  providedIn: "root",
})
export class ContentService2 {
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
      items: [
        {
          component: ReadOnlyValueComponent,
          label: "Type",
          value: "Person",
        },
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
          label: "Revision",
          value: "--",
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
          label: "Date of Last Login",
          value: "8 jul 2017 10:44:06 ",
        },
        [
          {
            component: ReadOnlyValueComponent,
            label: "Creator",
            value: "Administrator, The",
          },
          {
            component: ReadOnlyValueComponent,
            label: "Created",
            value: "22 jun 2012 11:46:13",
          },
        ],
        [
          {
            component: ReadOnlyValueComponent,
            label: "Last Modifier",
            value: "Administrator, The",
          },
          {
            component: ReadOnlyValueComponent,
            label: "Last Modified",
            value: "5 jun 2019 13:28:38",
          },
        ],
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
        {
          component: ReadOnlyValueComponent,
          label: "Language",
          value: "es",
        },
      ],
    },
    {
      type: "TABLE",
      heading: {
        label: "Assigned Roles",
      },
      columns: [
        {
          header: "Name",
          field: "name",
          ref: false,
        },
        {
          header: "Status",
          field: "status",
          ref: false,
        },
        {
          header: "Remark",
          field: "remark",
          ref: false,
        },
      ],
      values: [
        {
          name: "Administration",
          status: "active",
          remark: null,
        },

        {
          name: "Common_Main_PwdChg",
          status: "active",
          remark: null,
        },
        {
          name: "Admin_REST",
          status: "active",
          remark: null,
        },
        {
          name: "History_Reader",
          status: "active",
          remark: null,
        },
        {
          name: "Contacts_Admin",
          status: "active",
          remark: null,
        },
      ],
    },
    {
      type: "TABLE",
      heading: {
        label: "Assigned Companies",
      },
      columns: [
        {
          header: "Name",
          field: "name",
          ref: false,
        },
        {
          header: "Status",
          field: "status",
          ref: false,
        },
        {
          header: "Remark",
          field: "remark",
          ref: false,
        },
      ],
      values: [
        {
          name: "B. Hogar Center",
          status: "active",
          remark: null,
        },

        {
          name: "Sielex Cayro",
          status: "active",
          remark: null,
        },
        {
          name: "Tiendas Mass",
          status: "active",
          remark: null,
        },
      ],
    },
    {
      type: "TABLE",
      heading: {
        label: "JAAS Keys",
      },
      columns: [
        {
          header: "User",
          field: "user",
          ref: false,
        },
        {
          header: "JAAS System",
          field: "jassSystem",
          ref: false,
        },
        {
          header: "Key",
          field: "key",
          ref: false,
        },
      ],
      values: [
        {
          user: "Administrator",
          jassSystem: "eFaps",
          key: "Administrator",
        },
      ],
    },
  ],
};

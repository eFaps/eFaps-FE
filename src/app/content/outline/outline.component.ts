import { Component, Input, OnInit } from "@angular/core";
import { MatDialog } from "@angular/material/dialog";
import { Router } from "@angular/router";
import { ModalComponent } from "src/app/modal/modal/modal.component";

import { ActionType, NavItem, Outline, Section } from "../../models";

@Component({
  selector: "eFaps-outline",
  templateUrl: "./outline.component.html",
  styleUrls: ["./outline.component.scss"]
})
export class OutlineComponent implements OnInit {
  @Input() _navItem: NavItem;
  @Input() _outline: Outline;
  @Input() oid: string;
  sections: Section[] = [];
  header: string;
  menu: NavItem[];

  constructor(private router: Router, private dialog: MatDialog) {}

  ngOnInit(): void {}

  @Input() set navItem(navItem: NavItem) {
    this._navItem = navItem;
  }

  @Input() set outline(outline: Outline) {
    this._outline = outline;
    this.sections = outline.sections;
    this.header = outline.header;
    this.menu = outline.menu;
  }

  onAction(item: NavItem) {
    if (item.action) {
      switch (item.action.type) {
        case ActionType.MODAL:
          const dialogRef = this.dialog.open(ModalComponent, {
            data: {
              navItem: item,
              oid: this.oid
            },
            disableClose: true
          });
          dialogRef.afterClosed().subscribe({
            next: result => {
              if (result.reload) {
                this.reload();
              }
            }
          });
          break;
      }
    }
  }

  private reload() {
    this.router
      .navigate(["ui", { outlets: { layoutoutlet: null } }])
      .then(() => {
        this.router.navigate(
          ["ui", { outlets: { layoutoutlet: ["content"] } }],
          {
            skipLocationChange: true,
            replaceUrl: false,
            queryParams: {
              id: this.oid
            },
            state: { id: this.oid }
          }
        );
      });
  }
}

import { DragDrop } from "@angular/cdk/drag-drop";
import { AfterViewInit, Component, OnInit, ViewChild } from "@angular/core";
import { MatDrawer, MatDrawerContainer } from "@angular/material/sidenav";
import { ActivatedRoute } from "@angular/router";

import { Content, NavItem, Outline } from "../../models";
import { ContentService, HistoryService } from "../../services";

@Component({
  selector: "eFaps-layout",
  templateUrl: "./layout.component.html",
  styleUrls: ["./layout.component.scss"]
})
export class LayoutComponent implements OnInit, AfterViewInit {
  content: Content;
  nav: NavItem[] = [];

  overDrawer = false;
  mode = "push";
  drawerWidth = 250;
  isOpen = true;
  shouldTrigger = false;

  currentNav: NavItem;
  currentOutline: Outline;

  @ViewChild("drawerContainer") drawerContainer: MatDrawerContainer;
  @ViewChild("drawer") drawer: MatDrawer;
  @ViewChild("dragbar") dragbar: HTMLElement;

  constructor(
    private route: ActivatedRoute,
    private dragDrop: DragDrop,
    private contentService: ContentService,
    private historyService: HistoryService
  ) {
    this.route.data.subscribe({
      next: value => {
        this.content = value.content;
      }
    });
  }

  ngOnInit(): void {
    this.nav = this.content.nav;
    this.currentOutline = this.content.outline;
    this.currentNav = this.nav.find(item => {
      return item.id == this.content.selected;
    });
    this.historyService.register({
      id: this.currentNav.id,
      oid: this.currentOutline.oid,
      label: this.currentOutline.header
    });
  }

  ngAfterViewInit(): void {
    this.drawer.closedStart.subscribe({
      next: () => {
        this.isOpen = false;
        this.shouldTrigger = false;
      }
    });
    this.drawer.openedStart.subscribe({
      next: () => {
        this.isOpen = true;
      }
    });
    const ref = this.dragDrop.createDrag(this.dragbar);
    ref.lockAxis = "x";
    ref.moved.subscribe({
      next: ev => {
        this.drawerWidth = ev.pointerPosition.x - 2;
      }
    });
    ref.released.subscribe({
      next: _ => {
        ref.reset();
        this.drawerContainer.updateContentMargins();
      }
    });
  }

  closeDrawer() {
    this.mode = "push";
    this.drawer.close();
  }

  openDrawer() {
    this.mode = "push";
    this.drawer.open();
  }

  leaveDrawer() {
    if (this.mode == "over") {
      this.drawer.close();
    }
  }

  enterBar() {
    this.shouldTrigger = true;
    if (!this.isOpen) {
      setTimeout(() => {
        this.mode = "over";
        this.drawer.open();
        this.shouldTrigger = false;
      }, 800);
    }
  }

  leaveBar() {
    this.shouldTrigger = false;
  }

  loadContent(navItem: NavItem) {
    this.currentNav = navItem;
    this.contentService
      .getOutline(this.currentOutline.oid, navItem.id)
      .subscribe({
        next: outline => {
          this.currentOutline = outline;
          this.historyService.register({
            id: this.currentNav.id,
            oid: this.currentOutline.oid,
            label: this.currentOutline.header
          });
        }
      });
  }
}

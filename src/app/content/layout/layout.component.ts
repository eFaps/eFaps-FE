import { Component, OnInit, AfterViewInit, ViewChild } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { NavItem, Content } from "src/app/models";
import { MatDrawer, MatDrawerContainer } from "@angular/material/sidenav";
import { DragRef, DragDrop } from "@angular/cdk/drag-drop";

@Component({
  selector: "eFaps-layout",
  templateUrl: "./layout.component.html",
  styleUrls: ["./layout.component.scss"]
})
export class LayoutComponent implements OnInit, AfterViewInit {
  content: Content;
  tabs: NavItem[] = [];
  selectedIndex = 0;
  overDrawer = false;
  mode = "push";
  drawerWidth = 250;
  isOpen = true;
  shouldTrigger = false;

  @ViewChild("drawerContainer") drawerContainer: MatDrawerContainer;
  @ViewChild("drawer") drawer: MatDrawer;
  @ViewChild("dragbar") dragbar: HTMLElement;

  constructor(private route: ActivatedRoute, private dragDrop: DragDrop) {
    this.route.data.subscribe({
      next: value => {
        this.content = value.content;
      }
    });
  }

  ngOnInit(): void {
    this.tabs = this.content.nav;
    this.selectedIndex = this.tabs.findIndex(item => {
      return item.id == this.content.selected;
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
      next: source => {
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
}

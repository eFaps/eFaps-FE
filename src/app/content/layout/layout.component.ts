import { Component, OnInit, AfterViewInit, ViewChild, ElementRef } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { NavItem, Content } from "src/app/models";
import { MatDrawer } from '@angular/material/sidenav';

@Component({
  selector: "eFaps-layout",
  templateUrl: "./layout.component.html",
  styleUrls: ["./layout.component.scss"],
})
export class LayoutComponent implements OnInit, AfterViewInit {
  content: Content;
  tabs: NavItem[] = [];
  selectedIndex = 0;
  overDrawer = false;
  mode = 'push'
  drawerWidth = 250
  isOpen = true;
  @ViewChild('drawer') drawer: MatDrawer;

  constructor(private route: ActivatedRoute) {
    this.route.data.subscribe({
      next: (value) => {
        console.log(value);
        this.content = value.content;
      },
    });
  }

  ngOnInit(): void {
    this.tabs = this.content.nav;
    this.selectedIndex = this.tabs.findIndex((item) => {
      return item.id == this.content.selected;
    });
  }

  ngAfterViewInit(): void {
    this.drawer.closedStart.subscribe({
      next: () => {
        this.isOpen = false;
      }
    })
    this.drawer.openedStart.subscribe({
      next: () => {
        this.isOpen = true;
      }
    })
  }
}

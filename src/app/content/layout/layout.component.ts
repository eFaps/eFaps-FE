import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { NavItem, Content } from "src/app/models";

@Component({
  selector: "eFaps-layout",
  templateUrl: "./layout.component.html",
  styleUrls: ["./layout.component.scss"],
})
export class LayoutComponent implements OnInit {
  content: Content;
  tabs: NavItem[] = [];
  selectedIndex = 0;
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
}

import { Component, Input, OnInit } from "@angular/core";
import { NavItem, Outline, Section } from "src/app/models";

@Component({
  selector: "eFaps-outline",
  templateUrl: "./outline.component.html",
  styleUrls: ["./outline.component.scss"],
})
export class OutlineComponent implements OnInit {
  @Input() _navItem: NavItem;
  @Input() _outline: Outline;
  @Input() oid: string;
  sections: Section[] = [];
  header: string;
  menu: NavItem[];

  constructor() {}

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
    console.log(item);
  }
}

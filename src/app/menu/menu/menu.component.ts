import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";
import { NavItem } from "src/app/models";

@Component({
  selector: "eFaps-menu",
  templateUrl: "./menu.component.html",
  styleUrls: ["./menu.component.scss"],
})
export class MenuComponent implements OnInit {
  @Input() navItems: NavItem[] = [];
  @Output() action = new EventEmitter<NavItem>();
  constructor() {}

  ngOnInit(): void {}

  triggerAction(item: NavItem) {
    this.action.emit(item);
  }
}

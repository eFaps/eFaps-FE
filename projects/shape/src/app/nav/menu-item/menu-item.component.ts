import { Component, Input, OnInit, ViewChild, Output } from "@angular/core";

import { NavItem } from "../../models";
import { NavService } from '../../services';

@Component({
  selector: "eFaps-menu-item",
  templateUrl: "./menu-item.component.html",
  styleUrls: ["./menu-item.component.scss"]
})
export class MenuItemComponent implements OnInit {
  @Input() items: NavItem[];
  @ViewChild("childMenu", { static: true }) public childMenu;

  constructor(private navService: NavService) {}

  ngOnInit(): void {}

  triggerAction(item: NavItem) {
    this.navService.navigate(item)
  }
}

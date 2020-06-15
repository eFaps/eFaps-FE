import {
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
  ViewChild,
} from "@angular/core";
import { NavItem } from "src/app/models";

@Component({
  selector: "eFaps-menu-item",
  templateUrl: "./menu-item.component.html",
  styleUrls: ["./menu-item.component.scss"],
})
export class MenuItemComponent implements OnInit {
  @Input() items: NavItem[];
  @ViewChild("childMenu", { static: true }) public childMenu;
  @Output() action = new EventEmitter<NavItem>();
  constructor() {}

  ngOnInit(): void {}

  triggerAction(item: NavItem) {
    this.action.emit(item);
  }
}

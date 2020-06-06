import {
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
  ViewChild
} from "@angular/core";
import { Search } from "src/app/models";

@Component({
  selector: "eFaps-sub-menu",
  templateUrl: "./sub-menu.component.html",
  styleUrls: ["./sub-menu.component.scss"]
})
export class SubMenuComponent implements OnInit {
  @Input() items: Search[];
  @ViewChild("childMenu", { static: true }) public childMenu;
  @Output() selected = new EventEmitter<Search>();

  constructor() {}

  ngOnInit(): void {}

  onItemClick(searchItem: Search) {
    this.selected.emit(searchItem);
  }
}

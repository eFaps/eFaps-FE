import { Component, OnInit } from "@angular/core";
import { NavService } from "../../services/nav.service";
import { NavItem, Action, ActionType } from "../../models";

@Component({
  selector: "eFaps-cardinal",
  templateUrl: "./cardinal.component.html",
  styleUrls: ["./cardinal.component.scss"],
})
export class CardinalComponent implements OnInit {
  navItems: NavItem[] = [];
  contentUrl =
    "http://localhost:8888/eFaps/wicket/bookmarkable/org.efaps.ui.wicket.pages.TestPage";
  constructor(private navService: NavService) {}

  ngOnInit(): void {
    this.navService.getNav().subscribe({
      next: (menu) => {
        this.navItems = menu;
      },
    });
    this.navService.currentNav.subscribe({
      next: (navItem) => {
        this.triggerAction(navItem);
      },
    });
  }

  home() {
    this.onAction({
      id: "",
      label: "",
      action: {
        type: ActionType.DASHBOARD,
      },
    });
  }

  triggerAction(item: NavItem) {
    console.log(item);
    if (item && item.action) {
      this.onAction(item);
    }
  }

  onAction(item: NavItem) {
    switch (item.action.type) {
      case ActionType.DASHBOARD:
        this.contentUrl =
          "http://localhost:8888/eFaps/wicket/bookmarkable/org.efaps.ui.wicket.pages.dashboard.DashboardPage";
        break;
      case ActionType.GRID:
        this.contentUrl = `http://localhost:8888/eFaps/wicket/bookmarkable/org.efaps.ui.wicket.pages.content.grid.GridPage?id=${item.id}`;
        break;
      default:
        break;
    }
  }
}

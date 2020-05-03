import { Component, OnInit } from "@angular/core";
import { NavService } from '../../services/nav.service';
import { NavItem, Action, ActionType } from '../../models';

@Component({
  selector: "eFaps-cardinal",
  templateUrl: "./cardinal.component.html",
  styleUrls: ["./cardinal.component.scss"]
})
export class CardinalComponent implements OnInit {

  navItems: NavItem[] = [];
  contentUrl = "http://localhost:8888/eFaps/wicket/bookmarkable/org.efaps.ui.wicket.pages.TestPage"
  constructor(private navService: NavService) {}

  ngOnInit(): void {
    this.navService.currentNav.subscribe({
      next: menu => {
        this.navItems = menu;
      }
    });
      console.log("CardinalComponent")
        this.navService.load();

  }

  home() {
    this.onAction({
      type: ActionType.DASHBOARD
    })
  }

  triggerAction(item: NavItem) {
    console.log(item)
    if (item.action) {
        this.onAction(item.action)
    }
  }

  onAction(action: Action) {
    switch (action.type) {
      case ActionType.DASHBOARD:
          this.contentUrl = "http://localhost:8888/eFaps/wicket/bookmarkable/org.efaps.ui.wicket.pages.dashboard.DashboardPage"
        break;

      default:
        break;
    }
  }


}

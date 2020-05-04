import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { ActionType, NavItem } from "src/app/models";
import { NavService } from "src/app/services";

@Component({
  selector: "eFaps-top-nav",
  templateUrl: "./top-nav.component.html",
  styleUrls: ["./top-nav.component.scss"]
})
export class TopNavComponent implements OnInit {
  navItems: NavItem[] = [];

  constructor(
    private navService: NavService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.navService.getNav().subscribe({
      next: menu => {
        this.navItems = menu;
      }
    });
    this.navService.currentNav.subscribe({
      next: navItem => {
        this.triggerAction(navItem);
      }
    });
  }

  home() {
    this.navService.navigate({
      id: "",
      label: "",
      action: {
        type: ActionType.DASHBOARD
      }
    });
  }

  triggerAction(item: NavItem) {
    console.log(item);
    if (item && item.action) {
      this.onAction(item);
    }
  }

  onAction(item: NavItem) {
    console.log(this.route);
    switch (item.action.type) {
      case ActionType.DASHBOARD:
      case ActionType.GRID:
        this.router.navigate(["ui", { outlets: { layoutoutlet: ["wicket"] } }]);
        break;
      default:
        break;
    }
  }
}

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
  contentUrl =
    "http://localhost:8888/eFaps/wicket/bookmarkable/org.efaps.ui.wicket.pages.TestPage";

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
    this.onAction({
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
    console.log(this.route)
    switch (item.action.type) {
      case ActionType.DASHBOARD:
        this.router.navigate(["ui",{ outlets: { layoutoutlet: ['wicket'] }}],
  {
    //relativeTo: this.route.parent // <--- PARENT activated route.
  }
);
        this.contentUrl =
          "http://localhost:8888/eFaps/wicket/bookmarkable/org.efaps.ui.wicket.pages.dashboard.DashboardPage";
        break;
      case ActionType.GRID:
        this.router.navigateByUrl("wicket");
        this.contentUrl = `http://localhost:8888/eFaps/wicket/bookmarkable/org.efaps.ui.wicket.pages.content.grid.GridPage?id=${item.id}`;
        break;
      default:
        break;
    }
  }
}

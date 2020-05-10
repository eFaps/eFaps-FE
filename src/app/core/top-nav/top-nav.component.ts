import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { ActionType, NavItem, User } from "src/app/models";
import { NavService, UserService } from "src/app/services";

@Component({
  selector: "eFaps-top-nav",
  templateUrl: "./top-nav.component.html",
  styleUrls: ["./top-nav.component.scss"],
})
export class TopNavComponent implements OnInit {
  navItems: NavItem[] = [];
  user: User;
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private navService: NavService,
    private userService: UserService
  ) {}

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
    this.userService.currentUser.subscribe({
      next: (user) => {
        this.user = user;
      },
    });
  }

  home() {
    this.navService.navigate({
      id: "",
      label: "",
      action: {
        type: ActionType.DASHBOARD,
      },
    });
  }

  triggerAction(item: NavItem) {
    console.log(item);
    if (item && item.action && item.action.type != null) {
      this.onAction(item);
    }
  }

  onAction(item: NavItem) {
    console.log(this.route);
    switch (item.action.type) {
      case ActionType.GRID:
        this.router
          .navigate(["ui", { outlets: { layoutoutlet: null } }])
          .then(() => {
            this.router.navigate(
              ["ui", { outlets: { layoutoutlet: ["table"] } }],
              {
                skipLocationChange: true,
                replaceUrl: false,
                queryParams: {
                  id: item.id,
                },
                state: { id: item.id },
              }
            );
          });
        break;
      case ActionType.DASHBOARD:
        this.router.navigate(["ui", { outlets: { layoutoutlet: ["wicket"] } }]);
      case ActionType.FORM:
        this.router.navigate(["ui", { outlets: { layoutoutlet: ["wicket"] } }]);
        break;
      default:
        this.router.navigate(["ui", { outlets: { layoutoutlet: null } }]);
        break;
    }
  }
}

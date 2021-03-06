import {
  AfterViewChecked,
  ChangeDetectorRef,
  Component,
  ElementRef,
  OnInit,
  ViewChild
} from "@angular/core";
import { MatDialog } from "@angular/material/dialog";
import { Router } from "@angular/router";

import { ModalComponent } from "../../modal/modal/modal.component";
import { ActionType, NavItem, User } from "../../models";
import {
  BusyService,
  ExecService,
  NavService,
  UserService
} from "../../services";
import { SearchService } from '../../services/search.service';

@Component({
  selector: "eFaps-top-nav",
  templateUrl: "./top-nav.component.html",
  styleUrls: ["./top-nav.component.scss"]
})
export class TopNavComponent implements OnInit, AfterViewChecked {
  @ViewChild("menuWrapper") menuWrapper: ElementRef;
  navItems: NavItem[] = [];
  user: User;

  constructor(
    private changeDetectorRef: ChangeDetectorRef,
    private router: Router,
    private busyService: BusyService,
    private navService: NavService,
    private userService: UserService,
    private searchService: SearchService,
    private execService: ExecService,
    private dialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.busyService.start();
    this.navService.getNav().subscribe({
      next: menu => {
        this.navItems = menu;
      },
      complete: () => {
        this.busyService.stop();
      }
    });
    this.navService.currentNav.subscribe({
      next: navItem => {
        this.triggerAction(navItem);
      }
    });
    this.userService.currentUser.subscribe({
      next: user => {
        this.user = user;
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
    if (item && item.action && item.action.type != null) {
      this.onAction(item);
    }
  }

  onAction(item: NavItem) {
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
                  id: item.id
                },
                state: { id: item.id }
              }
            );
          });
        break;
      case ActionType.DASHBOARD:
        this.router.navigate(["ui", { outlets: { layoutoutlet: ["wicket"] } }]);
      case ActionType.FORM:
        this.router.navigate(["ui", { outlets: { layoutoutlet: ["wicket"] } }]);
        break;
      case ActionType.SEARCH:
        this.searchService.search(item);
        break;
      case ActionType.MODAL:
        const dialogRef = this.dialog.open(ModalComponent, {
          data: {
            navItem: item
          },
          disableClose: true
        });
        break;
      case ActionType.EXEC:
        this.execService.execute(item.id, { placeholder: 0 }).subscribe();
        break;
      default:
        this.router.navigate(["ui", { outlets: { layoutoutlet: null } }]);
        break;
    }
  }

  ngAfterViewChecked() {
    if (
      this.menuWrapper.nativeElement.scrollHeight >
      this.menuWrapper.nativeElement.clientHeight
    ) {
      setTimeout(() => {
        const lastElement = this.navItems[this.navItems.length - 1];
        if (lastElement.id == "MORE") {
          const more = this.navItems.pop();
          const item = this.navItems.pop();
          more.children = [item].concat(more.children);
          this.navItems.push(more);
        } else {
          const subMenus = this.navItems.splice(-2);
          this.navItems.push({
            id: "MORE",
            label: "",
            icon: "more_vert",
            children: subMenus
          });
        }
        this.changeDetectorRef.detectChanges();
      }, 200);
    }
  }
}

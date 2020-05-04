import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";
import { WicketPage } from "../models/wicket-page";
import { NavService } from "./nav.service";
import { ActionType } from "../models";

@Injectable({
  providedIn: "root"
})
export class WicketService {
  private pageSource = new BehaviorSubject<WicketPage>(null);
  currentPage = this.pageSource.asObservable();

  constructor(private navService: NavService) {
    this.navService.currentNav.subscribe({
      next: navItem => {
        switch (navItem.action.type) {
          case ActionType.DASHBOARD:
            this.openPage({
              url:
                "http://localhost:8888/eFaps/wicket/bookmarkable/org.efaps.ui.wicket.pages.dashboard.DashboardPage"
            });
            break;
          case ActionType.GRID:
            this.openPage({
              url: `http://localhost:8888/eFaps/wicket/bookmarkable/org.efaps.ui.wicket.pages.content.grid.GridPage?id=${navItem.id}`
            });
            break;
          default:
            break;
        }
      }
    });
  }

  openPage(page: WicketPage) {
    this.pageSource.next(page);
  }
}
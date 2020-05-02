import { Component, OnInit, AfterContentChecked } from "@angular/core";
import { NavService } from '../../services/nav.service';
import { NavItem } from '../../models';

@Component({
  selector: "eFaps-cardinal",
  templateUrl: "./cardinal.component.html",
  styleUrls: ["./cardinal.component.scss"]
})
export class CardinalComponent implements OnInit {

  navItems: NavItem[] = [];
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
}

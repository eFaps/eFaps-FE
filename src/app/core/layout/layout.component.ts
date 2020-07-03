import { Component, OnInit } from "@angular/core";

import { BusyService, UserService } from "../../services";

@Component({
  selector: "eFaps-layout",
  templateUrl: "./layout.component.html",
  styleUrls: ["./layout.component.scss"]
})
export class LayoutComponent implements OnInit {
  isBusy = false;

  constructor(
    private userService: UserService,
    private busyService: BusyService
  ) {}

  ngOnInit(): void {
    this.busyService.isBusy.subscribe({ next: busy => (this.isBusy = busy) });
    this.userService.setCurrent();
  }
}

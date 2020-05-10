import { Component, OnInit } from "@angular/core";
import { UserService } from "src/app/services";

@Component({
  selector: "eFaps-layout",
  templateUrl: "./layout.component.html",
  styleUrls: ["./layout.component.scss"],
})
export class LayoutComponent implements OnInit {
  constructor(private userService: UserService) {}
  ngOnInit(): void {
    this.userService.setCurrent();
  }
}

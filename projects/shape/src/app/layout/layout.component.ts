import { Component, OnInit } from "@angular/core";
import { LayoutService } from '../services/layout.service';

@Component({
  selector: "eFaps-layout",
  templateUrl: "./layout.component.html",
  styleUrls: ["./layout.component.scss"],
})
export class LayoutComponent implements OnInit {
  constructor(private layoutService: LayoutService) {}

  ngOnInit(): void {
      this.layoutService.loadLayout()
  }
}

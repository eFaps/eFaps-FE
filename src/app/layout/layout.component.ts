import { Component, OnInit } from "@angular/core";

import { ContentService } from "../services";

@Component({
  selector: "eFaps-layoutdd",
  templateUrl: "./layout.component.html",
  styleUrls: ["./layout.component.scss"],
})
export class LayoutComponent2 implements OnInit {
  constructor(private contentService: ContentService) {}

  ngOnInit(): void {
    //  this.contentService.loadContent(1);
  }
}

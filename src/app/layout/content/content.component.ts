import { Component, OnInit } from "@angular/core";

import { Content } from "../../models";
import { ContentService } from "../../services";

@Component({
  selector: "eFaps-content",
  templateUrl: "./content.component.html",
  styleUrls: ["./content.component.scss"],
})
export class ContentComponent implements OnInit {
  content: Content;
  constructor(private contentService: ContentService) {}

  ngOnInit(): void {}
}

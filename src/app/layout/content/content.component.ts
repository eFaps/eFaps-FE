import { Component, OnInit } from "@angular/core";
import { ContentService } from "../../services";
import { Content } from "../../models";

@Component({
  selector: "eFaps-content",
  templateUrl: "./content.component.html",
  styleUrls: ["./content.component.scss"],
})
export class ContentComponent implements OnInit {
  content: Content;
  constructor(private contentService: ContentService) {}

  ngOnInit(): void {
    
  }
}

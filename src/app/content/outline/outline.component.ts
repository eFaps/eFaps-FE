import { Component, Input, OnInit } from "@angular/core";
import { NavItem, Outline, Section } from "src/app/models";
import { ContentService } from "src/app/services";

@Component({
  selector: "eFaps-outline",
  templateUrl: "./outline.component.html",
  styleUrls: ["./outline.component.scss"],
})
export class OutlineComponent implements OnInit {
  @Input() navItem: NavItem;
  @Input() outline: Outline;
  @Input() oid: string;
  sections: Section[] = [];
  header: string;

  constructor(private contentService: ContentService) {}

  ngOnInit(): void {
    console.log(this.navItem);
    if (this.outline) {
      this.sections = this.outline.sections;
      this.header = this.outline.header;
    } else {
      this.contentService.getOutline(this.oid, this.navItem.id).subscribe({
        next: (outline) => {
          this.sections = outline.sections;
          this.header = outline.header;
        },
      });
    }
  }
}

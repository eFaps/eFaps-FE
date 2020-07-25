import { Component, OnInit, Input } from "@angular/core";
import { HeadingSection } from "../../models";

@Component({
  selector: "eFaps-heading-section",
  templateUrl: "./heading-section.component.html",
  styleUrls: ["./heading-section.component.scss"]
})
export class HeadingSectionComponent implements OnInit {
  _section: HeadingSection;
  constructor() {}

  ngOnInit(): void {}

  @Input()
  set section(section: HeadingSection) {
    this._section = section;
  }

  get section(): HeadingSection {
    return this._section;
  }
}

import { Component, Input, OnInit } from "@angular/core";
import { HeadingSection } from "src/app/models";

@Component({
  selector: "eFaps-heading",
  templateUrl: "./heading.component.html",
  styleUrls: ["./heading.component.scss"],
})
export class HeadingComponent implements OnInit {
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

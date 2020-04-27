import { Component, Input, OnInit } from "@angular/core";

@Component({
  selector: "eFaps-heading",
  templateUrl: "./heading.component.html",
  styleUrls: ["./heading.component.scss"],
})
export class HeadingComponent implements OnInit {
  @Input() label: string;
  constructor() {}

  ngOnInit(): void {}
}

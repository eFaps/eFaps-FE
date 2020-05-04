import { Component, OnInit } from "@angular/core";
import { SafeResourceUrl, DomSanitizer } from "@angular/platform-browser";

@Component({
  selector: "eFaps-page-wrapper",
  templateUrl: "./page-wrapper.component.html",
  styleUrls: ["./page-wrapper.component.scss"],
})
export class PageWrapperComponent implements OnInit {
  _url: string;
  urlSafe: SafeResourceUrl;
  constructor(public sanitizer: DomSanitizer) {}

  ngOnInit(): void {}
}

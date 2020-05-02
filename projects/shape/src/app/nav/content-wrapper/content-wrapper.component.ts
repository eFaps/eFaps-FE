import { Component, OnInit, Input } from "@angular/core";
import { DomSanitizer, SafeResourceUrl } from "@angular/platform-browser";

@Component({
  selector: "eFaps-content-wrapper",
  templateUrl: "./content-wrapper.component.html",
  styleUrls: ["./content-wrapper.component.scss"]
})
export class ContentWrapperComponent implements OnInit {
  _url: string;
  urlSafe: SafeResourceUrl;
  constructor(public sanitizer: DomSanitizer) {}

  ngOnInit(): void {
    //this.urlSafe = this.sanitizer.bypassSecurityTrustResourceUrl("");
  }

  @Input()
  set url(url: string) {
    this._url = url;
    this.urlSafe = this.sanitizer.bypassSecurityTrustResourceUrl(this._url);
  }
}

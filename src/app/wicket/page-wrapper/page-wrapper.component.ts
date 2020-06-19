import { Component, OnInit } from "@angular/core";
import { DomSanitizer, SafeResourceUrl } from "@angular/platform-browser";
import { WicketService } from "src/app/services/wicket.service";

@Component({
  selector: "eFaps-page-wrapper",
  templateUrl: "./page-wrapper.component.html",
  styleUrls: ["./page-wrapper.component.scss"],
})
export class PageWrapperComponent implements OnInit {
  _url: string = "";
  urlSafe: SafeResourceUrl;
  constructor(
    public sanitizer: DomSanitizer,
    private wicketService: WicketService
  ) {}

  ngOnInit(): void {
    this.wicketService.currentPage.subscribe({
      next: (page) => {
        this.url = page.url;
      },
    });
  }

  set url(url: string) {
    this._url = url;
    this.urlSafe = this.sanitizer.bypassSecurityTrustResourceUrl(this._url);
  }
}

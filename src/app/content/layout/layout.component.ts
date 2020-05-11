import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: "eFaps-layout",
  templateUrl: "./layout.component.html",
  styleUrls: ["./layout.component.scss"]
})
export class LayoutComponent implements OnInit {
  constructor(private route: ActivatedRoute) {
    this.route.data.subscribe({
      next: value => {
        console.log(value)
      }
    });
  }

  ngOnInit(): void {}
}

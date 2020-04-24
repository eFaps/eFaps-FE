import { Component, OnInit } from "@angular/core";

import { Tile } from "../../models";
import { LayoutService } from "../../services/layout.service";

@Component({
  selector: "eFaps-form",
  templateUrl: "./form.component.html",
  styleUrls: ["./form.component.scss"],
})
export class FormComponent implements OnInit {
  tiles: Tile[] = [];
  columns: number = 0;
  constructor(private layoutService: LayoutService) {}

  ngOnInit(): void {
    this.layoutService.currentLayout.subscribe({
      next: (layout) => {
        if (layout) {
          this.columns = layout.columns;
          this.tiles = layout.tiles;
        }
      },
    });
  }
}

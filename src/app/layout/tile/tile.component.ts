import { Component, Input, OnDestroy, OnInit } from "@angular/core";

import { Tile, Value } from "../../models";

@Component({
  selector: "eFaps-tile",
  templateUrl: "./tile.component.html",
  styleUrls: ["./tile.component.scss"],
})
export class TileComponent implements OnInit, OnDestroy {
  _tile: Tile;
  values: Value[] = [];

  constructor() {}

  ngOnInit(): void {}

  ngOnDestroy(): void {}

  @Input()
  set tile(tile: Tile) {
    this._tile = tile;
    this.values = tile.values;
  }

  get id() {
    return this._tile.id;
  }
}

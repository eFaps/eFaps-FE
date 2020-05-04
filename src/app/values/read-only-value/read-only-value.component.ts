import { Component, OnInit } from "@angular/core";
import { ValueComponent, Value } from "../../models";

@Component({
  selector: "eFaps-read-only-value",
  templateUrl: "./read-only-value.component.html",
  styleUrls: ["./read-only-value.component.scss"],
})
export class ReadOnlyValueComponent implements OnInit, ValueComponent {
  value: Value;
  constructor() {}

  ngOnInit(): void {}

  setValue(value: Value) {
    this.value = value;
  }
}

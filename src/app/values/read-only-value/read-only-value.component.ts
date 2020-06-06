import { Component, OnInit, Input } from "@angular/core";
import { ValueComponent, Value } from "../../models";

@Component({
  selector: "eFaps-read-only-value",
  templateUrl: "./read-only-value.component.html",
  styleUrls: ["./read-only-value.component.scss"],
})
export class ReadOnlyValueComponent implements OnInit, ValueComponent {
  _value: Value;
  constructor() {}

  ngOnInit(): void {}

  @Input()
  set value(value: Value) {
    this._value = value;
  }

  get value() {
    return this._value
  }
}

import { Component, OnInit, Input } from "@angular/core";
import { FormGroup, FormControl } from "@angular/forms";
import { Value } from "../..//models";

@Component({
  selector: "eFaps-date-value",
  templateUrl: "./date-value.component.html",
  styleUrls: ["./date-value.component.scss"]
})
export class DateValueComponent implements OnInit {
  @Input() formGroup: FormGroup;
  _value: Value;
  constructor() {}

  ngOnInit(): void {}

  @Input()
  set value(value: Value) {
    this._value = value;
    this.formGroup.addControl(value.name, new FormControl(value.value));
  }

  get value() {
    return this._value;
  }
}

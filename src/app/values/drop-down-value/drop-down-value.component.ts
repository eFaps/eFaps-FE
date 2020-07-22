import { Component, OnInit, Input } from "@angular/core";
import { FormGroup, FormControl } from "@angular/forms";
import { Option, Value } from "../../models";

@Component({
  selector: "eFaps-drop-down-value",
  templateUrl: "./drop-down-value.component.html",
  styleUrls: ["./drop-down-value.component.scss"]
})
export class DropDownValueComponent implements OnInit {
  @Input() formGroup: FormGroup;
  _value: Value;
  currentOption: Option;
  options: Option[] = [];
  constructor() {}

  ngOnInit(): void {}

  @Input()
  set value(value: Value) {
    this._value = value;
    this.options = value.options;
    this.formGroup.addControl(value.name, new FormControl(value.value));
  }

  get value() {
    return this._value;
  }
}

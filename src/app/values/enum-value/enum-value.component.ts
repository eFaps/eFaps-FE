import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

import { Value, Option } from '../../models';

@Component({
  selector: 'eFaps-enum-value',
  templateUrl: './enum-value.component.html',
  styleUrls: ['./enum-value.component.scss']
})
export class EnumValueComponent implements OnInit {
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
    this.formGroup.addControl(value.name, new FormControl());
  }

  get value() {
    return this._value;
  }

}

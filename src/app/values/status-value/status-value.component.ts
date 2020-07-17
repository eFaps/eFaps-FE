import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Value, Option } from '../../models';

@Component({
  selector: 'eFaps-status-value',
  templateUrl: './status-value.component.html',
  styleUrls: ['./status-value.component.scss']
})
export class StatusValueComponent implements OnInit {
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

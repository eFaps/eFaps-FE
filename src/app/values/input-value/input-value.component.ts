import { Component, Input, OnInit } from '@angular/core';
import { Value, ValueComponent } from 'src/app/models';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'eFaps-input-value',
  templateUrl: './input-value.component.html',
  styleUrls: ['./input-value.component.scss']
})
export class InputValueComponent implements OnInit, ValueComponent {
  @Input() formGroup: FormGroup;
  _value: Value;
  constructor() {}

  ngOnInit(): void {}

  @Input()
  set value(value: Value) {
    this._value = value;
    this.formGroup.addControl(value.name, new FormControl())
  }

  get value() {
    return this._value
  }
}

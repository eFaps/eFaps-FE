import { Component, Input, OnInit } from '@angular/core';
import { Value, ValueComponent } from 'src/app/models';

@Component({
  selector: 'eFaps-input-value',
  templateUrl: './input-value.component.html',
  styleUrls: ['./input-value.component.scss']
})
export class InputValueComponent implements OnInit, ValueComponent {
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

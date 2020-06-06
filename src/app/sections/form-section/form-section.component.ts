import { Component, OnInit, Input } from '@angular/core';
import { FormSection, Value } from 'src/app/models';

@Component({
  selector: 'eFaps-form-section',
  templateUrl: './form-section.component.html',
  styleUrls: ['./form-section.component.scss']
})
export class FormSectionComponent implements OnInit {
  _section: FormSection;

  constructor() {}

  ngOnInit(): void {}

  @Input()
  set section(section: FormSection) {
    this._section = section;
  }

  get section(): FormSection {
    return this._section;
  }

  isArray(obj: any) {
    return Array.isArray(obj);
  }

  getArrayStyle(valAr: Value[], index: number) {
    let style = {
      width: "calc(100% / " + valAr.length + ")",
    };
    return style;
  }

}

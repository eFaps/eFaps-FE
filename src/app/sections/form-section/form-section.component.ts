import { Component, OnInit, Input } from "@angular/core";
import { FormSection, Value } from "src/app/models";
import { FormGroup, FormBuilder } from "@angular/forms";

@Component({
  selector: "eFaps-form-section",
  templateUrl: "./form-section.component.html",
  styleUrls: ["./form-section.component.scss"],
})
export class FormSectionComponent implements OnInit {
  _section: FormSection;
  _formGroup: FormGroup;

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    if (!this._formGroup) {
      this._formGroup = this.formBuilder.group([]);
    }
  }

  @Input()
  set section(section: FormSection) {
    this._section = section;
  }

  get section(): FormSection {
    return this._section;
  }

  @Input()
  set formGroup(formGroup: FormGroup) {
    this._formGroup = formGroup;
  }

  get formGroup() {
    return this._formGroup;
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

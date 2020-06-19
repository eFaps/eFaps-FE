import { Component, Input, OnInit } from "@angular/core";
import { FormGroup } from "@angular/forms";
import { DomSanitizer, SafeHtml } from "@angular/platform-browser";
import { Value, ValueComponent } from "src/app/models";

@Component({
  selector: "eFaps-snipplet-value",
  templateUrl: "./snipplet-value.component.html",
  styleUrls: ["./snipplet-value.component.scss"],
})
export class SnippletValueComponent implements OnInit, ValueComponent {
  formGroup: FormGroup;
  _value: Value;
  snipplet: SafeHtml;

  constructor(private sanitizer: DomSanitizer) {}

  ngOnInit(): void {}

  @Input()
  set value(value: Value) {
    this._value = value;
    if (value.value) {
      this.snipplet = this.sanitizer.bypassSecurityTrustHtml(value.value);
    } else {
      this.snipplet = null;
    }
  }

  get value() {
    return this._value;
  }
}

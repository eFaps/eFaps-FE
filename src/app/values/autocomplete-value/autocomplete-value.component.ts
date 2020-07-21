import { Component, OnInit, Input } from "@angular/core";
import { FormGroup, FormControl } from "@angular/forms";
import { Value, Option } from "../../models";
import { switchMap, debounceTime, tap, finalize, map } from "rxjs/operators";
import { AutocompleteService } from "../../services";
@Component({
  selector: "eFaps-autocomplete-value",
  templateUrl: "./autocomplete-value.component.html",
  styleUrls: ["./autocomplete-value.component.scss"]
})
export class AutocompleteValueComponent implements OnInit {
  @Input() formGroup: FormGroup;
  _value: Value;
  options: any;
  isLoading: boolean = false;

  constructor(private autocompleteService: AutocompleteService) {}

  ngOnInit(): void {}

  @Input()
  set value(value: Value) {
    this._value = value;
    const formControl = new FormControl(value.value);
    this.formGroup.addControl(value.name, formControl);

    this.options = formControl.valueChanges.pipe(
      debounceTime(300),
      tap(() => (this.isLoading = true)),
      switchMap(value =>
        this.autocompleteService
          .search(this.value.ref, value, this.formGroup.value)
          .pipe(
            map(resp => resp.options),
            finalize(() => (this.isLoading = false))
          )
      )
    );
  }

  get value() {
    return this._value;
  }

  displayFn(option: Option): string {
    return option && option.label ? option.label : '';
  }
}

import { Component, OnInit } from "@angular/core";
import { FormControl } from "@angular/forms";
import {
  trigger,
  state,
  style,
  transition,
  animate
} from "@angular/animations";

@Component({
  selector: "eFaps-search",
  templateUrl: "./search.component.html",
  styleUrls: ["./search.component.scss"],
  animations: [
    trigger("changeSize", [
      state(
        "small",
        style({
          width: "80px"
        })
      ),
      state(
        "wide",
        style({
          width: "200px"
        })
      ),
      transition("small=>wide", animate("300ms")),
      transition("wide=>small", animate("300ms"))
    ])
  ]
})
export class SearchComponent implements OnInit {
  currentState = "small";
  formControl: FormControl;
  constructor() {}

  ngOnInit(): void {}

  toggleState() {
    this.currentState = this.currentState === "small" ? "wide" : "small";
  }

  onFocus() {
    this.currentState = "wide";
  }

  onBlur() {
    this.currentState = "small";
  }
}

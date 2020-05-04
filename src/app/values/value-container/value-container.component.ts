import {
  AfterViewInit,
  Component,
  ComponentFactoryResolver,
  Input,
  OnInit,
  ViewChild,
} from "@angular/core";

import { Value, ValueComponent } from "../../models";
import { ValueDirective } from "../../services/value.directive";

@Component({
  selector: "eFaps-value-container",
  templateUrl: "./value-container.component.html",
  styleUrls: ["./value-container.component.scss"],
})
export class ValueContainerComponent implements OnInit, AfterViewInit {
  private _value: Value;

  @ViewChild(ValueDirective) valueHost: ValueDirective;

  constructor(private componentFactoryResolver: ComponentFactoryResolver) {}
  ngOnInit(): void {}

  ngAfterViewInit(): void {
    console.log("init");
    this.loadComponent();
  }

  @Input()
  set value(value: Value) {
    this._value = value;
  }

  private loadComponent() {
    const componentFactory = this.componentFactoryResolver.resolveComponentFactory(
      this._value.component
    );
    const viewContainerRef = this.valueHost.viewContainerRef;
    viewContainerRef.clear();

    const componentRef = viewContainerRef.createComponent(componentFactory);
    (<ValueComponent>componentRef.instance).setValue(this._value);
  }
}

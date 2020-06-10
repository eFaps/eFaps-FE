import {
  Component,
  ComponentFactoryResolver,
  Input,
  OnInit,
  ViewChild
} from "@angular/core";
import { FormGroup } from '@angular/forms';

import { Value, ValueComponent, ValueType } from "../../models";
import { ValueDirective } from "../../services/value.directive";
import { InputValueComponent } from "../input-value/input-value.component";
import { ReadOnlyValueComponent } from "../read-only-value/read-only-value.component";
import { SnippletValueComponent } from '../snipplet-value/snipplet-value.component';

@Component({
  selector: "eFaps-value-container",
  templateUrl: "./value-container.component.html",
  styleUrls: ["./value-container.component.scss"]
})
export class ValueContainerComponent implements OnInit {
  private _value: Value;


  @ViewChild(ValueDirective, { static: true }) valueHost: ValueDirective;
    _formGroup: FormGroup;

  constructor(private componentFactoryResolver: ComponentFactoryResolver) {}
  ngOnInit(): void {
    this.loadComponent();
  }

  @Input()
  set value(value: Value) {
    this._value = value;
  }

  @Input()
  set form(formGroup: FormGroup) {
    this._formGroup = formGroup
  }

  private loadComponent() {
    const component = this.getType(this._value);
    const componentFactory = this.componentFactoryResolver.resolveComponentFactory(
      component
    );

    const viewContainerRef = this.valueHost.viewContainerRef;
    viewContainerRef.clear();

    const componentRef = viewContainerRef.createComponent(componentFactory);

    (<ValueComponent>componentRef.instance).formGroup = this._formGroup;
    (<ValueComponent>componentRef.instance).value = this._value;
  }

  getType(_value: Value): any {
    let type;
    switch (_value.type) {
      case ValueType.INPUT:
        type = InputValueComponent;
        break;
      case ValueType.SNIPPLET:
        type = SnippletValueComponent;
        break;
      default:
        type = ReadOnlyValueComponent;
        break;
    }
    return type;
  }
}

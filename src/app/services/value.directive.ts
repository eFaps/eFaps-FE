import { Directive, ViewContainerRef } from "@angular/core";

@Directive({
  selector: "[eFapsValue]",
})
export class ValueDirective {
  constructor(public viewContainerRef: ViewContainerRef) {}
}

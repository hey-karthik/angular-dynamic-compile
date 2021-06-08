// tslint:disable: directive-selector
import { Directive, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[propertPane]',
})
export class propertyPaneDirective {
  constructor(public viewContainerRef: ViewContainerRef) { }
}

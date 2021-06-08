// tslint:disable: directive-selector
import { Directive, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[fixturepropertPane]',
})
export class fixturepropertyPaneDirective {
  constructor(public viewContainerRef: ViewContainerRef) { }
}

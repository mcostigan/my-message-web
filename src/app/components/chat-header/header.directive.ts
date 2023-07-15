import {Directive, ViewContainerRef} from '@angular/core';

@Directive({
  selector: '[chatHeader]'
})
export class HeaderDirective {

  constructor(public viewContainerRef: ViewContainerRef) { }

}

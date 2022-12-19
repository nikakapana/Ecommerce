import {Directive, ElementRef, ViewContainerRef} from '@angular/core';
import {AuthService} from "../../core/services";

@Directive({
  selector: '[appAuthAccess]'
})
export class AuthAccessDirective {

  constructor(
    private authService: AuthService,
    private element: ElementRef,
    private container: ViewContainerRef
  ) { }

}

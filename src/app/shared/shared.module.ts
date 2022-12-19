import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedRoutingModule } from './shared-routing.module';
import { AuthAccessDirective } from './directives/auth-access.directive';


@NgModule({
  declarations: [
    AuthAccessDirective
  ],
  imports: [
    CommonModule,
    SharedRoutingModule
  ]
})
export class SharedModule { }

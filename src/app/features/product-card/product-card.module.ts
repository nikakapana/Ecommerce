import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductCardComponent } from './product-card.component';
import {SharedModule} from "../../shared/shared.module";
import {RouterLink} from "@angular/router";



@NgModule({
  declarations: [
    ProductCardComponent
  ],
    imports: [
        CommonModule,
        SharedModule,
        RouterLink
    ],
  exports: [
    ProductCardComponent
  ]
})
export class ProductCardModule { }

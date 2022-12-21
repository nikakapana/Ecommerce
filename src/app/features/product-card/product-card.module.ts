import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductCardComponent } from './product-card.component';
import {SharedModule} from "../../shared/shared.module";



@NgModule({
  declarations: [
    ProductCardComponent
  ],
    imports: [
        CommonModule,
        SharedModule
    ],
  exports: [
    ProductCardComponent
  ]
})
export class ProductCardModule { }

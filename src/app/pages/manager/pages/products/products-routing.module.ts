import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ProductsComponent} from "./products.component";
import {ProductAddEditComponent} from "./product-add-edit/product-add-edit.component";

const routes: Routes = [
  {
    path: '',
    component: ProductsComponent
  },
  {
    path: 'create',
    component: ProductAddEditComponent
  },
  {
    path: 'edit/:id',
    component: ProductAddEditComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductsRoutingModule { }

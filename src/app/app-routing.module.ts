import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {MainLayoutComponent} from "./features/main-layout/main-layout.component";
import {AuthGuard} from "./core/guards/auth.guard";

const routes: Routes = [

  {
    path: '',
    component: MainLayoutComponent,
    children: [
      {
        path: '',
        loadChildren: () => import('./pages/home/home.module').then(m => m.HomeModule)
      },{
        path: 'auth',
        loadChildren: () => import('./pages/auth/auth.module').then(m => m.AuthModule)
      },{
        path: 'products',
        loadChildren: () => import('./pages/products/products.module').then(m => m.ProductsModule)
      },{
        path: 'cart',
        canActivate: [AuthGuard],
        loadChildren: () => import('./pages/cart/cart.module').then(m => m.CartModule)
      },{
        path: 'orders',
        canActivate: [AuthGuard],
        loadChildren: () => import('./pages/orders/orders.module').then(m => m.OrdersModule)
      },
    ]
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

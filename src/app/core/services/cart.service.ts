import { Injectable } from '@angular/core';
import {BaseService} from "./base.service";
import {BehaviorSubject, tap} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class CartService extends BaseService{

cartCount = new BehaviorSubject(0);
cartCount$ = this.cartCount.asObservable();
  getCart(){
    return this.get('cart')
      .pipe(
        tap((carts: any) => {
          this.cartCount.next(carts.length)
        })
      )
  }

  addToCart(payload: {
  productId: string,
    quantity: number
}) {
  return this.post('cart', payload)
    .pipe(
      tap(() => {
        this.cartCount.next(this.cartCount.value + payload.quantity)
      })
    )}

}

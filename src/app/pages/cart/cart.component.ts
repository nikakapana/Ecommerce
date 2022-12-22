import { Component, OnInit } from '@angular/core';
import {CartService, OrderService} from "../../core/services";
import {Cart} from "../../core/interfaces";
import {BaseService} from "../../core/services/base.service";

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  cartItems: Cart[] = []
  cartSum = 0
  constructor(
    private cartService: CartService,
    private orderService: OrderService

  ) { }

  ngOnInit(): void {
    this.getCarts()
  }


  getCarts() {
    this.cartService.getCart()
      .pipe()
      .subscribe(
        res => {
          this.cartItems = res
          this.cartSum = this.cartItems.reduce((acc, item) => acc + item.total, 0)
        }
      )
  }

removeItem(item: Cart) {
    this.cartService.deleteItem(item.id)
      .pipe()
      .subscribe(() => {
        this.getCarts()
      })
}

  checkout() {
this.orderService.createOrder()
  .pipe()
  .subscribe( res => {
    this.getCarts()
  })
  }
}

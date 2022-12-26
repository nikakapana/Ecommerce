import {Component, OnDestroy, OnInit} from '@angular/core';
import {CartService, OrderService} from "../../core/services";
import {Cart} from "../../core/interfaces";
import {BaseService} from "../../core/services/base.service";
import {Subject, takeUntil} from "rxjs";

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit, OnDestroy {
  sub$ = new Subject()
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
      .pipe(takeUntil(this.sub$))
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

  ngOnDestroy(): void {
    this.sub$.next(null)
    this.sub$.complete()
  }
}

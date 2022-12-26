import {Component, Input, OnDestroy, OnInit, Output} from '@angular/core';
import {Category, Product} from "../../core/interfaces";
import {CartService, ProductsService} from "../../core/services";
import {Observable, Subject, takeUntil} from "rxjs";
import {CategoryService} from "../../core/services/category.service";

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss']
})
export class ProductCardComponent implements OnInit, OnDestroy {

  @Input() product: Product = {} as Product

  sub$ = new Subject()

  constructor(
    private cartService: CartService


  ) { }

  ngOnDestroy(): void {
    this.sub$.next(null)
    this.sub$.complete()
    }

  ngOnInit(): void {

  }

productCat = this.product.category?.id
  addToCart() {
this.cartService.addToCart({
  productId: this.product.id,
  quantity: 1
})
  .pipe(takeUntil(this.sub$))
  .subscribe()
  }
}

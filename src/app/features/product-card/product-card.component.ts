import {Component, Input, OnInit, Output} from '@angular/core';
import {Category, Product} from "../../core/interfaces";
import {CartService, ProductsService} from "../../core/services";
import {Observable} from "rxjs";
import {CategoryService} from "../../core/services/category.service";

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss']
})
export class ProductCardComponent implements OnInit {

  @Input() product: Product = {} as Product



  constructor(
    private cartService: CartService


  ) { }

  ngOnInit(): void {

  }

productCat = this.product.category?.id
  addToCart() {
this.cartService.addToCart({
  productId: this.product.id,
  quantity: 1
}).subscribe()
  }
}

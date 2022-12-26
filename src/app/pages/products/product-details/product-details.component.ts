import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {ProductsService} from "../../../core/services";
import {Product} from "../../../core/interfaces";

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit {

  productId!: string
  product!: Product
  constructor(

    private route: ActivatedRoute,
    private productsService: ProductsService
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe( params => {
      this.productId = params['id'];
      this.getProduct()
    })
  }

  getProduct() {
     this.productsService.getOne(this.productId)
       .pipe()
       .subscribe((product) => {
         this.product = product
       })
  }

}

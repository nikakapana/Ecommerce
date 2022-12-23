import { Component, OnInit } from '@angular/core';
import {ProductsService} from "../../core/services";
import {Category, Product} from "../../core/interfaces";
import {CategoryService} from "../../core/services/category.service";
import {Observable} from "rxjs";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {


  products: Product[] = []

  categoryId?: number

  categories$: Observable<Category[]> = this.categoryService.getAll()
  search: any;
  // loading = false;
  constructor(
    private productsService: ProductsService,
    private categoryService: CategoryService,
    private route: ActivatedRoute

  ) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe( params => {
      this.categoryId = params['category']
      this.getProducts()
    })

  }

  getProducts() {
    // this.loading = true
    const params = {
      categoryId: this.categoryId || undefined,
      search: this.search || null
    }
    this.productsService.getProducts(params)
      .pipe()
      .subscribe( {
        next: (res => {
          this.products = res
          // setTimeout( () => {
          //   this.loading = false
          // }, 200)
        })
      })
  }

  searchHandler(search: string) {
    if(search.length >2) {
      this.search = search
      this.getProducts()
    } else {
      this.search = null
      this.getProducts()
    }
  }
}

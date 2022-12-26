import {Component, OnDestroy, OnInit} from '@angular/core';
import {Category, Product} from "../../../../core/interfaces";
import {CategoryService} from "../../../../core/services/category.service";
import {ProductsService} from "../../../../core/services";
import {Subject, takeUntil} from "rxjs";

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit, OnDestroy {

  sub$ = new Subject()
  products: Product[] = []

  constructor(
    private productService : ProductsService
  ) { }

  ngOnDestroy(): void {
        this.sub$.next(null)
    this.sub$.complete()
    }

  ngOnInit(): void {
    this.getAll()
  }

  getAll() {
    this.productService.getProducts({})
      .pipe(takeUntil(this.sub$))
      .subscribe(res => {
        this.products = res
      })
  }

  deleteItem(id: string) {
    this.productService.deleteItem(id)
      .pipe(takeUntil(this.sub$))
      .subscribe(res => {
        this.getAll()
      })
  }


}

import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {ProductsService} from "../../../../../core/services";
import {ActivatedRoute, Router} from "@angular/router";
import {Observable, of, switchMap} from "rxjs";
import {Category} from "../../../../../core/interfaces";
import {CategoryService} from "../../../../../core/services/category.service";

@Component({
  selector: 'app-product-add-edit',
  templateUrl: './product-add-edit.component.html',
  styleUrls: ['./product-add-edit.component.scss']
})
export class ProductAddEditComponent implements OnInit {

  form: FormGroup = new FormGroup({
    id: new FormControl(null),
    name: new FormControl('', Validators.required),
    description: new FormControl('', Validators.required),
    image: new FormControl('', Validators.required),
    price: new FormControl('', Validators.required),
    categoryId: new FormControl('', Validators.required),
  })

  categories$: Observable<Category[]> = this.categoryService.getAll()

  constructor(
    private productsService: ProductsService,
    private route: ActivatedRoute,
    private router: Router,
    private categoryService: CategoryService
  ) { }

  ngOnInit(): void {

    this.route.params.pipe(
      switchMap((params: any) => {
        if(params['id']) {
        return  this.productsService.getOne(params['id'])

        }
        return of(null)
      })
    ).subscribe(res => {
      if (res) {
        this.form.patchValue({...res,
        categoryId: res.category.id})
      }
    })
  }

  submit() {
    if(this.form.invalid) {
      return
    }
    if(this.form.value.id) {
      this.productsService.update(this.form.value.id, this.form.value)
        .pipe()
        .subscribe(res => {

          this.router.navigate(['/manager/products'])
            .then(() => {
              this.form.reset()
            })
        })
    }
    else {

      this.productsService.create(this.form.value)
        .pipe()
        .subscribe(res => {
          this.router.navigate(['/manager/products'])
            .then(() => {
              this.form.reset()
            })
        })
    }
  }
}

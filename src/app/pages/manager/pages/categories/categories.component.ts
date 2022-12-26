import {Component, OnDestroy, OnInit} from '@angular/core';
import {CategoryService} from "../../../../core/services/category.service";
import {Category} from "../../../../core/interfaces";
import {Subject, takeUntil} from "rxjs";

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss']
})
export class CategoriesComponent implements OnInit, OnDestroy {

  sub$ = new Subject()
  categories: Category[] = []

  constructor(
    private categoryService : CategoryService
  ) { }

  ngOnInit(): void {
    this.getAll()
  }

  getAll() {
    this.categoryService.getAll()
      .pipe()
      .subscribe(res => {
this.categories = res
    })
  }

  deleteItem(id: number) {
    this.categoryService.deleteItem(id)
      .pipe(takeUntil(this.sub$))
      .subscribe(res => {
        this.getAll()
      })
  }

  ngOnDestroy(): void {
    this.sub$.next(null)
    this.sub$.complete()
  }




}

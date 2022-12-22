import { Component, OnInit } from '@angular/core';
import {CategoryService} from "../../../../core/services/category.service";
import {Category} from "../../../../core/interfaces";

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss']
})
export class CategoriesComponent implements OnInit {

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
      .pipe()
      .subscribe(res => {
        this.getAll()
      })
  }




}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CategoriesRoutingModule } from './categories-routing.module';
import { CategoriesComponent } from './categories.component';
import { CategoryAddEditComponent } from './category-add-edit/category-add-edit.component';
import {ReactiveFormsModule} from "@angular/forms";


@NgModule({
  declarations: [
    CategoriesComponent,
    CategoryAddEditComponent
  ],
    imports: [
        CommonModule,
        CategoriesRoutingModule,
        ReactiveFormsModule
    ]
})
export class CategoriesModule { }

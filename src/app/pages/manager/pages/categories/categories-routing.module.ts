import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {CategoriesComponent} from "./categories.component";
import {CategoryAddEditComponent} from "./category-add-edit/category-add-edit.component";

const routes: Routes = [
  {
    path: '',
    component: CategoriesComponent
  },
  {
    path: 'create',
    component: CategoryAddEditComponent
  },
  {
    path: 'edit/:id',
    component: CategoryAddEditComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CategoriesRoutingModule { }

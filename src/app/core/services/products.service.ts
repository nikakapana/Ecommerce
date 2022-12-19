import { Injectable } from '@angular/core';
import {BaseService} from "./base.service";
import {Observable} from "rxjs";
import {Product} from "../interfaces";

@Injectable({
  providedIn: 'root'
})
export class ProductsService extends BaseService{

getProducts(params: {
  categoryId?: number,
  limit?: number,
  search?: string
}): Observable<Product[]> {
  return this.get<Product[]>('product', params)
}
}

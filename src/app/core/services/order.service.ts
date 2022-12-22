import { Injectable } from '@angular/core';
import {BaseService} from "./base.service";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class OrderService extends BaseService{


  getOrders(): Observable<any> {
    return this.get('order')
  }

  createOrder(): Observable<any> {
  return  this.post('order')
  }

}

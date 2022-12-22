import { Injectable } from '@angular/core';
import {BaseService} from "./base.service";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class OrderService extends BaseService{


  createOrder(): Observable<any> {
  return  this.post('order')
  }

}

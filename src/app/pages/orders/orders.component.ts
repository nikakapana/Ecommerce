import { Component, OnInit } from '@angular/core';
import {OrderService} from "../../core/services";
import {Observable} from "rxjs";
import {Order} from "../../core/interfaces";


@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.scss']
})
export class OrdersComponent implements OnInit {
  orders$: Observable<Order[]> = this.ordersService.getOrders()

  constructor(
    private ordersService: OrderService
  ) { }

  ngOnInit(): void {
  }

}

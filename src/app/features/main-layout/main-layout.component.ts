import { Component, OnInit } from '@angular/core';
import {CartService} from "../../core/services";

@Component({
  selector: 'app-main-layout',
  templateUrl: './main-layout.component.html',
  styleUrls: ['./main-layout.component.scss']
})
export class MainLayoutComponent implements OnInit {

  constructor(
    private cartService: CartService
  ) { }

  ngOnInit(): void {
    this.cartService.getCart().subscribe()
  }

}

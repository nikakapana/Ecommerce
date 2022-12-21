import {AfterViewInit, Component, OnInit} from '@angular/core';
import {AuthService, CartService} from "../../../../core/services";
import {User} from "../../../../core/interfaces/user";
import {Observable} from "rxjs";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

cartCount$: Observable<number> = this.cartService.cartCount$



get userIsAuthenticated() {
  return this.authService.token
}

get user() {
  return this.authService.user
}

  constructor(
    public authService: AuthService,
    private cartService: CartService
  ) { }

  ngOnInit(): void {

  }



  signOut() {
    this.authService.signOut()
  }
}

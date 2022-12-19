import {AfterViewInit, Component, OnInit} from '@angular/core';
import {AuthService} from "../../../../core/services";
import {User} from "../../../../core/interfaces/user";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {





get userIsAuthenticated() {
  return this.authService.token
}

get user() {
  return this.authService.user
}

  constructor(
    public authService: AuthService
  ) { }

  ngOnInit(): void {

  }



  signOut() {
    this.authService.signOut()
  }
}

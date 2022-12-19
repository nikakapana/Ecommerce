import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {BaseService} from "./base.service";
import {Login, LoginResponse, SignUp} from "../interfaces/auth";
import {Observable, tap} from "rxjs";
import {User} from "../interfaces/user";

@Injectable({
  providedIn: 'root'
})
export class AuthService extends BaseService{


get token():string | null {
  return localStorage.getItem('token')
}

  // firstName(name: string): void {
  //   return localStorage.setItem('firstname', name) ;
  // }


get user():User |null {
  const user = localStorage.getItem('user');
    return user ? JSON.parse(user) : null
}

get firstname():string | null {
  return localStorage.getItem('firstname')
}
  login(payload: Login): Observable<LoginResponse> {
    return this.post<LoginResponse>('auth/login', payload)
      .pipe(
        tap(
          (response: LoginResponse) => {
            this.setToken(response.accessToken)
            this.setUser(response.user)
this.setFirstname(response.firstname)
          }
        )
      )
  }

  signUp(payload: SignUp): Observable<User> {
    return this.post<User>('auth/signup', payload)
  }

  setToken(token: string): void {
    localStorage.setItem('token', token)
  }

  setFirstname(firstname: string): void {
    localStorage.setItem('firstname', firstname)
  }
setUser(user: User): void {
  localStorage.setItem('user', JSON.stringify(user))
}

  signOut() {
    localStorage.clear()
  }
}

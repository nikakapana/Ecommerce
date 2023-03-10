import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../environments/environment";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class BaseService {
apiUrl = environment.apiUrl
  constructor(
    private http: HttpClient
  ) { }

  post<T>(url: string, body?: any): Observable<T> {
  return this.http.post<T>(this.apiUrl + url, body)
  }

  get<T>(url: string, params?: any): Observable<T> {
  return this.http.get<T>(this.apiUrl+ url, {params})
  }

  delete<T>(url: string): Observable<T> {
  return this.http.delete<T>(this.apiUrl + url)
  }

  put<T>(url: string, body?: any): Observable<T> {
    return this.http.put<T>(this.apiUrl + url, body)
  }



  // setStorage(key: string, value: any): void {
  //   localStorage.setItem(key, value)
  // }
  // getStorage (key: string): any {
  //   return localStorage.getItem(key)
  // }
}

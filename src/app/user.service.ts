import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Menu} from './entity';
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private loginUrl = 'http://localhost:8080/login.ctl';
  private menuUrl = '';
  constructor(private http: HttpClient) { }
  getMenu(): Observable<Menu[]> {
    return this.http.get<Menu[]>(this.menuUrl).pipe();
  }
  login(userLogin: { username: string, password: string }): Observable<any> {
    return this.http.post<any>(this.loginUrl, userLogin);
  }
}

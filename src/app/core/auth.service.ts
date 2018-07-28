import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs-compat/Observable';
import { Auth } from '../login/login.component';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  basicUrl = 'http://185.238.72.22:3400';

  constructor(private http: HttpClient) {}

  getToken(): string {
    return localStorage.getItem('token');
  }

  setToken(token: string) {
    localStorage.setItem('token', token);
  }

  login(payload): Observable<any> {
    return this.http.post<Auth>(`${this.basicUrl}/api/auth`, payload);
  }
}

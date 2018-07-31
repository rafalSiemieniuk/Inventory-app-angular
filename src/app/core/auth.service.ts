import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs-compat/Observable';
import { Auth } from '../login/login.component';
import { User } from '../user.interface';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  user: User = null;

  constructor(private http: HttpClient) { }

  getToken(): string {
    return localStorage.getItem('token');
  }

  setToken(token: string) {
    localStorage.setItem('token', token);
  }

  login(user): Observable<any> {
    return this.http.post<Auth>('api/auth', user);
  }

  getCurrentUser(): Observable<User> {
    return this.http.get<User>('api/users/current');
  }

  getOffices(): Observable<Array<any>> {
    return this.http.get<Array<any>>('api/offices');
  }
}

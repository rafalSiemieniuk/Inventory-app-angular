import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs-compat/Observable';
import { Auth } from '../login/login.component';
import { User } from '../user.interface';
import { AsyncSubject } from 'rxjs';
import { shareReplay } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  user: AsyncSubject<User> = new AsyncSubject();
  userObs: any = null;

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
    if (!this.userObs) {
      this.userObs = this.http.get<User>('api/users/current')
        .do((user) => {
          this.user.next(user);
          this.user.complete();
        },
          () => this.userObs = null)
        .pipe(shareReplay());
    }
    return this.userObs;
  }

  getUpdatedUser() {
    this.user = new AsyncSubject();
    this.userObs = null;
    return this.getCurrentUser();
  }
}

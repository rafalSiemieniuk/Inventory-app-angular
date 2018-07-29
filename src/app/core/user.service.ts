import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs-compat/Observable';
import { User } from '../app.component';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  user: User = null;

  constructor(private http: HttpClient) { }

    getCurrentUser(): Observable<User> {
      return this.http.get<User>('api/users/current');
    }
}

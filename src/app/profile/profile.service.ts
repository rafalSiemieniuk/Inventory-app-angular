import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs-compat/Observable';
import { User } from './profile.component';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  basicUrl = 'http://185.238.72.22:3400';

  constructor(private http: HttpClient) { }

  getCurrentUser(): Observable<User> {
    return this.http.get<User>(`${this.basicUrl}/api/users/current`);
  }
}

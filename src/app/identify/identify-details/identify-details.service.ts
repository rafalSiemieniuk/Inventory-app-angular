import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable()

export class IdentifyDetailsService {

  constructor(private http: HttpClient) {
  }

  getObject(id): Observable<any> {
    return this.http.get(`api/identify/${id}`);
  }

  getPlace(id): Observable<any> {
    return this.http.get(`api/places/${id}`);
  }

  getDevice(id): Observable<any> {
    return this.http.get(`api/devices/${id}`);
  }

  getUser(id): Observable<any> {
    return this.http.get(`api/users/${id}`);
  }

  getOffice(id): Observable<any> {
    return this.http.get(`api/offices/${id}`);
  }
}

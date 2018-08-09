import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {Observable} from 'rxjs-compat/Observable';


@Injectable()
export class PlacesService {
  constructor(private http: HttpClient) {
  }

  getPlaces(): Observable<any> {
    return this.http.get('api/places');
  }

  getOffices(): Observable<any> {
    return this.http.get(`api/offices`);
  }

  getPlace(id): Observable<any> {
    return this.http.get(`api/places/${id}`);
  }

  getDevices(): Observable<any> {
    return this.http.get(`api/devices`);
  }
}

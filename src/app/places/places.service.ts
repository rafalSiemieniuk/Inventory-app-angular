import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs-compat/Observable';


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

  getById(id): Observable<any> {
    return this.http.get(`api/places/${id}`);
  }

  saveDevice(place): Observable<any> {
    if (place.id) {
      return this.http.put(`api/places/${place.id}`, place);
    } else {
      return this.http.post(`api/places/`, place);
    }
  }
}

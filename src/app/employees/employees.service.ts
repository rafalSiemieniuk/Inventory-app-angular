import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs-compat/Observable';


@Injectable()
export class EmployeesService {
    constructor(private http: HttpClient) { }

    getEmployees(): Observable<any> {
        return this.http.get('api/users');
    }

    getEmployee(id): Observable<any> {
      return this.http.get(`api/users/${id}`);
    }

    getDevices(): Observable<any> {
      return this.http.get(`api/devices`);
    }
}

import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs-compat/Observable';
import { AuthService } from '../core/auth.service';


@Injectable()

export class DevicesService {


    constructor(private http: HttpClient) {

    }
    getDevices(): Observable<Array<any>> {
        return this.http.get<Array<any>>('api/devices');
    }

    getDevicesFiltered(device): Observable<any> {
        const params = new HttpParams().set('search', device);
        return this.http.get('api/devices', { params: params });
    }
}
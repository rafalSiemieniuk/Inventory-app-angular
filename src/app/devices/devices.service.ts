import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs-compat/Observable';
import { AuthService } from '../core/auth.service';


@Injectable()

export class DevicesService {


    constructor(private http: HttpClient, private authService: AuthService) {

    }
    getDevices(device): Observable<Array<any>> {
        const params = new HttpParams().set('search', device);
        return this.http.get<Array<any>>('api/devices', { params: params });
    }
}

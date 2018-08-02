import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs-compat/Observable';
import { AuthService } from '../core/auth.service';


@Injectable()
export class DevicesService {


    constructor(private http: HttpClient, private authService: AuthService) {

    }
    getDevices(): Observable<Array<any>> {
        return this.http.get<Array<any>>('api/devices');
    }

    // updateDevice(user): Observable<any> {
    //     return this.http.put<any>(`api/users/${this.authService.user.id}`, user);
    // }
}

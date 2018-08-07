import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs-compat/Observable';


@Injectable()

export class DevicesService {


    constructor(private http: HttpClient) {

    }
    getDevices(): Observable<any> {
        return this.http.get('api/devices');
    }

    getDevicesFiltered(search): Observable<any> {
        return this.http.get('api/devices', { params: { search } });
    }

    getMyDevices(belongsToId): Observable<any> {
        return this.http.get('api/devices', { params: { belongsToId } });
    }

    getById(id): Observable<any> {
        return this.http.get(`api/devices/${id}`);
    }

    addNewDevice(name): Observable<any> {
        return this.http.post(`api/devices/`, name);
    }
}

import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs-compat/Observable';
import { Router } from '@angular/router';
import { Device } from './device.interface';

@Injectable()

export class DevicesService {

  device: Device;
  oldObject: any;
  newObject: any;
  QRcodeId: string;

  constructor(
    private http: HttpClient,
    private router: Router) { }

  getDevices(): Observable<any> {
    return this.http.get('api/devices');
  }

  getDevicesFiltered(search): Observable<any> {
    return this.http.get('api/devices', { params: { search } });
  }

  getMyDevices(belongsToId): Observable<any> {
    return this.http.get('api/devices', { params: { belongsToId } });
  }

  geByIdObject(id): Observable<any> {
    return this.http.get(`api/identify/${id}`);
  }

  getIdentifyObject(id): Observable<any> {
    return this.http.get(`api/identify/${id}`);
  }

  getById(id): Observable<any> {
    return this.http.get(`api/devices/${id}`);
  }

  saveDevice(device): Observable<any> {
    if (device.id) {
      return this.http.put(`api/devices/${device.id}`, device);
    } else {
      return this.http.post(`api/devices/`, device);
    }
  }

  changeId() {
    console.log(this.device.id);
    console.warn(this.newObject.id);
    return this.http.patch(`api/devices/${this.device.id}`, {
      belongsToId: this.newObject.id
    });
  }
}

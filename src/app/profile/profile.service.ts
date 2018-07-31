import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs-compat/Observable';

@Injectable()
export class ProfileService {


    constructor(private http: HttpClient) {

    }
    getOffices(): Observable<Array<any>> {
        return this.http.get<Array<any>>('api/offices');
    }
}

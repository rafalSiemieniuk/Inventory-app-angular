import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs-compat/Observable';
import { AuthService } from '../core/auth.service';


@Injectable()
export class ProfileService {


    constructor(private http: HttpClient, private authService: AuthService) {

    }
    getOffices(): Observable<Array<any>> {
        return this.http.get<Array<any>>('api/offices');
    }

    updateUser(user): Observable<any> {
        return this.http.put<any>(`api/users/${this.authService.user.id}`, user);
    }
}

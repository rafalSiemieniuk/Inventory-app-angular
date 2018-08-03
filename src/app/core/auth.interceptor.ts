import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpHeaders, HttpErrorResponse, HttpEvent } from '@angular/common/http';
import { AuthService } from './auth.service';
import { Observable } from 'rxjs-compat/Observable';
import 'rxjs/add/operator/do';
import { Router } from '@angular/router';



@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  basicUrl = 'https://185.238.72.22:5000';

  constructor(private authService: AuthService, private router: Router) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    const token: string = this.authService.getToken();
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    const url = `${this.basicUrl}/${req.url}`;
    const reqCloned = req.clone({ headers, url });

    return next.handle(reqCloned).do(
      (event: HttpEvent<any>) => { },
      (err: any) => {
        if (err instanceof HttpErrorResponse) {
          if (err.status === 401) {
            this.router.navigate(['/login']);
          }
        }
      });
  }
}


import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthService } from './auth.service';
import { Observable } from 'rxjs';
import { ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { catchError, map } from 'rxjs/operators';
import { of } from 'rxjs/observable/of';
import { throwError } from 'rxjs';

@Injectable()
export class AuthenticationGuard implements CanActivate {

  constructor(private router: Router, private authService: AuthService) { }

  // canActivate(): boolean {
  //     if (localStorage.getItem('token')) {
  //         return true;
  //     }

  //     this.router.navigate(['/login']);
  //     return false;
  // }

  // canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {
  //   return this.authService.getCurrentUser().map(e => {
  //     console.log('e = ',e);
  //       // if (e) {
  //       //     return true;
  //       // }
  //   }).catch(() => {
  //     this.authService.user = null;
  //       return Observable.of(false);
  //   });

  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {
    return this.authService.getCurrentUser().pipe(
      map(result => {
        console.warn(result);
        if (!result) {
          console.log('true');
          return false;
        } else {
          console.log('false');
          return true;
        }
      }),
      catchError(e => {
        console.warn(e);
        this.authService.user = null;
        return throwError(e);
      })
      // catchError((err) => {
      //   console.log(err);
      //   this.authService.user = err;
      //   return Observable.throw(err || 'Internal Server error');

      //   // return false;
      // })
    );
  }

  //   canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {
  //     return this.authService.getCurrentUser().pipe(
  //       map(e => {
  //         if (e) {
  //           return true;
  //         } else {
  //           ...
  //         }
  //       }),
  //       catchError((err) => {
  //         return of(false);
  //       })
  //     );
  // }

}

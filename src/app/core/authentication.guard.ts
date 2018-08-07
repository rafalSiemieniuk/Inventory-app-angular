import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthService } from './auth.service';
import { ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { User } from '../user.interface';
import { Observable, of } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

@Injectable()
export class AuthenticationGuard implements CanActivate {

  constructor(private router: Router, private authService: AuthService) { }

  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | boolean {
    return this.authService.getCurrentUser()
      .pipe(
        map((user) => user.id !== ''),
        catchError(() => of(false))
      );
  }
}

import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthService } from './core/auth.service';
import { Observable, of } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

@Injectable()
export class AdminGuard implements CanActivate {

    constructor(private router: Router, private profileService: AuthService) { }

    canActivate(): Observable<boolean> | boolean {
      return this.profileService.getCurrentUser()
      .pipe(
        map((user) => user.isAdmin),
        catchError(() => of(false))
      );
  }
}

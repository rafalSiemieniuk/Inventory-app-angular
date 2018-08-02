import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthService } from './auth.service';
import { ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

@Injectable()
export class AuthenticationGuard implements CanActivate {

  constructor(private router: Router, private authService: AuthService) { }

  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): Promise<boolean> | boolean {
    const {user} = this.authService;
    if (user && user.id !== '') {
      return true;
    }
    return this.authService.getCurrentUser().toPromise()
      .then((currentUser) => currentUser && currentUser.id !== '')
      .catch(() => {
        this.authService.user = null;
        return false;
      });
  }

}

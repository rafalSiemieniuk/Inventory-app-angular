import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './core/auth.service';

@Injectable()
export class AdminGuard implements CanActivate {

    constructor(private router: Router, private profileService: AuthService) { }

    canActivate(): Observable<boolean> | boolean {
        if (this.profileService.user.isAdmin) {
            return true;
        }

        this.router.navigate(['/noauth']);
        return false;
    }
}

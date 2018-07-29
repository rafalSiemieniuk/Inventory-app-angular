import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { UserService } from './core/user.service';
import { Observable } from '../../node_modules/rxjs';


@Injectable()
export class AdminGuard implements CanActivate {

    constructor(private router: Router, private profileService: UserService) { }

    canActivate(): Observable<boolean> | boolean {
        if (this.profileService.user.isAdmin) {
            return true;
        }

        this.router.navigate(['/noauth']);
        return false;
    }
}

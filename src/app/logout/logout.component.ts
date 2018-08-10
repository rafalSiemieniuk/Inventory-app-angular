import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import * as ons from 'onsenui';
import { AuthService } from '../core/auth.service';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.scss']
})
export class LogoutComponent implements OnInit {

  constructor(
    private router: Router,
    private authService: AuthService,
  ) { }

  ngOnInit() {
    this.router.navigate([``]);
    localStorage.removeItem('token');
    this.authService.getUpdatedUser()
      .subscribe(() => {
        ons.notification.toast('Logout successful', { timeout: 2000 });
      }, () => {
        ons.notification.toast('Logout unsuccessful', { timeout: 2000 });
      });
  }

}

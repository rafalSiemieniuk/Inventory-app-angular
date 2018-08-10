import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import * as ons from 'onsenui';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.scss']
})
export class LogoutComponent implements OnInit {

  constructor(
    private router: Router
  ) { }

  ngOnInit() {
    ons.notification.toast('Logout successful', { timeout: 2000 });
    ons.notification.alert('You have been logged out');
    localStorage.removeItem('token');
    this.router.navigate([``]);
  }

}

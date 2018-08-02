import { Component, OnInit } from '@angular/core';
import { MenuService } from '../menu.service';
import {Router} from '@angular/router';

@Component({
  selector: 'ons-page[sideMenu]',
  templateUrl: './content-menu.component.html',
  styleUrls: ['./content-menu.component.scss']
})
export class ContentMenuComponent implements OnInit {
  title: string;

  constructor(private menuService: MenuService, public router: Router) {
    this.router.events.subscribe((event) => {
      this.changeTitle();
    });
  }
  openMenu() {
    this.menuService.toggle();
  }

  ngOnInit() {
    this.changeTitle();
  }

  changeTitle() {
    if (this.router.url === '/login' ) {
      this.title = 'Login';
    } else if (this.router.url === '/profile/myprofile' ) {
      this.title = 'Profile';
    } else if (this.router.url === '/profile/editprofile' ) {
      this.title = 'Profile';
    } else if (this.router.url === '/devices/mydevices' ) {
      this.title = 'Devices';
    } else if (this.router.url === '/devices/alldevices' ) {
      this.title = 'Devices';
    } else if (this.router.url === '/employees' ) {
      this.title = 'Employees';
    } else if (this.router.url === '/identify' ) {
      this.title = 'Identify';
    } else if (this.router.url === '/places' ) {
      this.title = 'Places';
    }
  }

}

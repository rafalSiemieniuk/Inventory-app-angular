import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { MenuService } from '../menu.service';
import { routes } from '../routes';
import { Subscription } from 'rxjs';
import { AuthService } from '../../core/auth.service';
import * as ons from 'onsenui';

@Component({
  selector: 'ons-page[Menu]',
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.scss']
})
export class SideMenuComponent implements OnInit {

  links = null;

  constructor(private router: Router, private menuService: MenuService, private authService: AuthService) {
  }

  toggleMenu() {
    this.menuService.toggle();
  }


  ngOnInit() {
    this.authService.user.subscribe(user => {
      this.filterByAdmin(user);
      this.filterByNav();
      // ons.disableAutoStyling();
      // ons.platform.select('ios');
    });
  }

  filterByAdmin(user) {
    this.links = routes.filter(item =>
      (item.adminRequired && user.isAdmin) || !item.adminRequired);
  }

  filterByNav() {
    this.links = this.links.filter(item => item.showInNav);
  }
  isAndroid() {
    return ons.platform.isAndroid();
  }

}



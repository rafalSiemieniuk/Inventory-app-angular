import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { MenuService } from '../menu.service';
import { routes } from '../routes';
import {AuthService} from '../../core/auth.service';




@Component({
  selector: 'ons-page[Menu]',
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.scss']
})
export class SideMenuComponent implements OnInit {

  links = [];

  constructor(private router: Router, private menuService: MenuService, private authService: AuthService) {
  }
  toggleMenu() {
    this.menuService.toggle();
  }


  ngOnInit() {
    // const { user } = this.authService;
    // this.links = routes.filter(item => (item.adminRequred && user.isAdmin ) || !item.adminRequred);
    // // console.log(this.links);
    this.filterAdmin();
  }
  filterAdmin() {
    const { user } = this.authService;
    this.links = routes.filter(item => (item.adminRequred && false ) || !item.adminRequred);
  }
}



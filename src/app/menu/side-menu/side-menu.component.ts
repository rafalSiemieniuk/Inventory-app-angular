import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { MenuService } from '../menu.service';
import { routes } from '../routes';
import { Subscription } from 'rxjs';
import { AuthService } from '../../core/auth.service';
import { shareReplay } from 'rxjs/operators';


@Component({
  selector: 'ons-page[Menu]',
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.scss']
})
export class SideMenuComponent implements OnInit {

  links = routes;
  user = null;
  subscription: Subscription;
  constructor(private router: Router, private menuService: MenuService, private authService: AuthService) {
    this.subscription = this.authService.getCurrentUser().subscribe(user => { this.user = user; });
  }
  toggleMenu() {
    this.menuService.toggle();
  }


  ngOnInit() {

    this.filterAdmin();
  }
  filterAdmin() {
    const { user } = this.authService;
    this.links = routes.filter(item => (item.adminRequired && false ) || !item.adminRequired); //<-- zamiast false wstawić user.isAdmin
    console.log(this.links);
  }
}



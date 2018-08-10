import { Component, OnInit } from '@angular/core';
import { MenuService } from '../menu.service';
import {Router} from '@angular/router';
import {routes} from '../routes'
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
      const activeRouter = routes.find(route =>
        this.router.url.indexOf(route.router) === 1
      );
      this.title = activeRouter && activeRouter.name;
  }

}

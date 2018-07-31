import { Component, OnInit } from '@angular/core';
import { MenuService } from '../menu.service';
import { Router } from '@angular/router';

@Component({
  selector: 'ons-page[sideMenu]',
  templateUrl: './content-menu.component.html',
  styleUrls: ['./content-menu.component.scss']
})
export class ContentMenuComponent implements OnInit {

  constructor(private menuService: MenuService, public router: Router) { }
  openMenu() {
    this.menuService.toggle();
  }

  ngOnInit() {
  }

}

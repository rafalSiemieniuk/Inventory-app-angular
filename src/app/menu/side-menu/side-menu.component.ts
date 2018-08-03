import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { MenuService } from '../menu.service';
import { routes } from '../routes';




@Component({
  selector: 'ons-page[Menu]',
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.scss']
})
export class SideMenuComponent implements OnInit {

  links = routes;

  constructor(private router: Router, private menuService: MenuService) {
  }
  toggleMenu() {
    this.menuService.toggle();
  }


  ngOnInit() {
  }
}




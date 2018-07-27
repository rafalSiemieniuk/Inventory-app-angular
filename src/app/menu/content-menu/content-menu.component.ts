import { Component, OnInit } from '@angular/core';
import {MenuService} from '../menu.service';

@Component({
  selector: 'app-content-menu',
  templateUrl: './content-menu.component.html',
  styleUrls: ['./content-menu.component.scss']
})
export class ContentMenuComponent implements OnInit {

  constructor(private menuService: MenuService) { }
  openMenu() {
    this.menuService.open();
  }

  ngOnInit() {
  }

}

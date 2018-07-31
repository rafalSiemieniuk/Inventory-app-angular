import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { MenuService } from '../menu.service';




@Component({
  selector: 'ons-page[Menu]',
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.scss']
})
export class SideMenuComponent implements OnInit {


  links: any[] = [{
    'name': 'Profile',
    'router': 'profile'
  }, {
    'name': 'My Devices',
    'router': 'devices/mydevices'
  },
  {
    'name': 'All Devices',
    'router': 'devices/alldevices'
  }, {
    'name': 'Employees',
    'router': 'employees'
  }, {
    'name': 'Identify',
    'router': 'identify'
  }, {
    'name': 'Places',
    'router': 'places'
  }
  ];

  constructor(private router: Router, private menuService: MenuService) {
  }
  toggleMenu() {
    this.menuService.toggle();
  }


  ngOnInit() {
  }
}




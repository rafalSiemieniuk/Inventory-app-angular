import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-side-menu',
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.scss']
})
export class SideMenuComponent implements OnInit {

  links: any[] = [{
    'name': 'Profile',
    'router': 'profile'
  }, {
    'name': 'My Devices',
    'router': 'mydevices'
  },
  {
    'name': 'All Devices',
    'router': 'alldevices'
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

  constructor() { }

  ngOnInit() {
  }

}

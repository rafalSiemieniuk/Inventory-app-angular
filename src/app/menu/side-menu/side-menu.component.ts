import { Component, OnInit, Input } from '@angular/core';
import { Router } from '../../../../node_modules/@angular/router';
import { UserService } from '../../core/user.service';




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

  ifAdmin() {
    if (!this.userService.user.isAdmin) {
      this.links.splice(2, 1);
    }
  }
  constructor(private router: Router, private userService: UserService) {
  }

  ngOnInit() {
  }
}




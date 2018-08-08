import { Component, OnInit } from '@angular/core';
import { DevicesService } from '../devices.service';
import { AuthService } from '../../core/auth.service';

@Component({
  selector: 'app-my-devices',
  templateUrl: './my-devices.component.html',
  styleUrls: ['./my-devices.component.scss']
})
export class MyDevicesComponent implements OnInit {

  myDevices: any[] = [];
  user;
  constructor(private devicesService: DevicesService, private authService: AuthService) {
  }

  ngOnInit() {
    this.authService.user.subscribe((user) => {
      this.user = user;
      this.getDevices(user);
    });


  }

  getDevices(user) {
    this.devicesService.getMyDevices(user.id)
      .subscribe(device => {
        this.myDevices = device;
      });
  }
}


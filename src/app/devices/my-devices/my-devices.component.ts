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

  constructor(private devicesService: DevicesService) {
  }

  ngOnInit() {
    this.devicesService.getMyDevices('872e2dd7-225c-4e3b-8021-21aafd83fc48')
      .subscribe((items) => {
        this.myDevices = items;
      });
  }
}


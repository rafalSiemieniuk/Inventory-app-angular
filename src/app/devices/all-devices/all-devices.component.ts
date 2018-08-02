import { Component, OnInit } from '@angular/core';
import { DevicesService } from '../devices.service';

@Component({
  selector: 'app-all-devices',
  templateUrl: './all-devices.component.html',
  styleUrls: ['./all-devices.component.scss'],
})
export class AllDevicesComponent implements OnInit {

  devices: any[] = [];


  constructor(private devicesService: DevicesService) { }

  ngOnInit() {
    this.devicesService.getDevices().subscribe((items) => {
      this.devices = items;
    });
  }
}

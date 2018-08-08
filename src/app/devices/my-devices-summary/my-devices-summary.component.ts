import { Component, OnInit } from '@angular/core';
import { DevicesService } from '../devices.service';
import { Router } from '@angular/router';
import { Device } from '../device.interface';

@Component({
  selector: 'app-my-devices-summary',
  templateUrl: './my-devices-summary.component.html',
  styleUrls: ['./my-devices-summary.component.scss']
})
export class MyDevicesSummaryComponent implements OnInit {

  device: Device;
  oldObject: any;
  newObject: any;

  constructor(
    private deviceService: DevicesService,
    private router: Router) {
    this.device = this.deviceService.device;
    this.oldObject = this.deviceService.oldObject;
    this.newObject = this.deviceService.newObject;
  }

  ngOnInit() {
    this.checkDevice();
  }

  checkDevice() {
    if (!this.deviceService.QRcodeId) {
      this.router.navigate([`/devices/mydevices`]);
    }
  }
}

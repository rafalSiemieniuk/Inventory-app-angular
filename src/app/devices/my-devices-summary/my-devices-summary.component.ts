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
    private router: Router) { }

  ngOnInit() {
    this.checkDevice();
    this.deviceService.QRcodeId = null;
    this.device = this.deviceService.device;
    this.newObject = this.deviceService.newObject;
  }

  checkDevice() {
    if (!this.deviceService.QRcodeId) {
      this.router.navigate([`/devices/mydevices`]);
    }
  }
}

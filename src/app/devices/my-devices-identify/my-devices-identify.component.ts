import { Component, OnInit } from '@angular/core';
import { DevicesService } from '../devices.service';
import { Router } from '@angular/router';
import * as ons from 'onsenui';
import { AuthService } from '../../core/auth.service';

@Component({
  selector: 'app-my-devices-identify',
  templateUrl: './my-devices-identify.component.html',
  styleUrls: ['./my-devices-identify.component.scss']
})
export class MyDevicesIdentifyComponent implements OnInit {

  objectName = null;

  constructor(
    private deviceService: DevicesService,
    private router: Router,
    private authService: AuthService) { }

  ngOnInit() {
  }

  detectQRcode(code) {
    if (!this.deviceService.QRcodeId) {
      this.deviceService.QRcodeId = code;
      this.deviceService.getIdentifyObject(code).subscribe(object => {
        this.deviceService.newObject = object[object.objectType];
        if (object.user) {
          this.objectName = `${object.user.firstName} ${object.user.lastName}`;
        } else {
          this.objectName = object.place.name;
        }
      });
    }
  }

  removePopup() {
    this.deviceService.QRcodeId = null;
    this.objectName = null;
  }

  goSummary() {
    this.checkCurrentUser();
    this.router.navigate([`/devices/mydevices/transfer/summary`]);
    this.deviceService.changeId().subscribe(() => {
      ons.notification.toast('Operation successful', { timeout: 2000 });
    });
  }

  checkCurrentUser() {
    this.authService.user.subscribe(user => {
      const idOldObject = this.deviceService.device.belongsToId;
      if (idOldObject !== user['id']) {
        this.deviceService.getIdentifyObject(idOldObject).subscribe(object => {
          this.deviceService.oldObject = object[object.objectType];
        });
      } else {
        this.deviceService.oldObject = user;
      }
    });
  }
}

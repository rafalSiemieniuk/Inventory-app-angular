import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DevicesService } from '../devices.service';
import { FormGroup, FormControl } from '@angular/forms';
import * as ons from 'onsenui';
import { Location } from '@angular/common';



@Component({
  selector: 'app-edit-device',
  templateUrl: './edit-device.component.html',
  styleUrls: ['./edit-device.component.scss']
})
export class EditDeviceComponent implements OnInit {


  backhref = '../../';


  constructor(private route: ActivatedRoute, private devicesService: DevicesService, private location: Location) { }
  editForm = new FormGroup({
    id: new FormControl(),
    name: new FormControl(),
    belongsToId: new FormControl(),
    imageUrl: new FormControl(),
    description: new FormControl()

  });
  ngOnInit() {
    const id = this.route.snapshot.params.details;
    if (id !== 'new') {
      this.getDevice(id);
      this.backhref = '../';
    }
  }
  getDevice(deviceId) {
    this.devicesService.getById(deviceId).subscribe(item => {
      this.editForm.setValue(item);
    });
  }

  onSubmit() {
    const device = this.editForm.value;

    if (device.name || device.name.replace(/\s/g, '') === '') {
      return ons.notification.alert('Incorrect Name');
    } else {
      this.devicesService.saveDevice(device).subscribe(() => {
        this.location.back();
        ons.notification.toast('Submit successful', { timeout: 2000 });
      });
    }
  }
}

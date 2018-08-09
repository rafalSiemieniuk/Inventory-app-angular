import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DevicesService } from '../devices.service';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-edit-device',
  templateUrl: './edit-device.component.html',
  styleUrls: ['./edit-device.component.scss']
})
export class EditDeviceComponent implements OnInit {


  backhref = '../../';


  constructor(private route: ActivatedRoute, private devicesService: DevicesService) { }
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
    this.devicesService.saveDevice(device).subscribe();
  }
}

import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DevicesService } from '../devices.service';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-edit-device',
  templateUrl: './edit-device.component.html',
  styleUrls: ['./edit-device.component.scss']
})
export class EditDeviceComponent implements OnInit {
  device = <any>{};


  @ViewChild('nameEdit') nameEdit: ElementRef;
  constructor(private route: ActivatedRoute, private devicesService: DevicesService) { }
  editForm = new FormGroup({
    edit: new FormControl()
  });
  ngOnInit() {
    const id = this.route.snapshot.params.details;
    if (id === 'new') {
      this.device = {};
    } else {
      this.getDevice(id);
    }
  }
  getDevice(deviceId) {
    this.devicesService.getById(deviceId).subscribe(item => {
      this.device = item;
    });
  }

  onSubmit() {
    this.device.name = this.nameEdit.nativeElement.value;
    this.devicesService.editDevice(this.device).subscribe();
  }
}
